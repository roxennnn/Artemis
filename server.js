import express from "express";
import bodyParser from "body-parser";
const { json, urlencoded } = bodyParser;
import cors from "cors";
import path from "path";

import { HOST, PORT as _PORT, DB } from "./config/db.config.js";

const app = express();

let corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

import db from "./models/index.js";

db.mongoose
  .connect(`mongodb://${HOST}:${_PORT}/${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });


// routes
import auth_routes from "./routes/auth.routes.js";
auth_routes(app);

// This is used in order to make node.js completely host our project
// @TOFIX
app.use(express.static(path.join(path.resolve(), 'client/build')))
app.get("*", (req,res) => {
  res.sendFile(path.join(path.resolve(), 'client/build', 'index.html'))
});
// simple route (it comes from the previous block)
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to workUrFreedom application." });
// });


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// Blockchain interaction
import Web3 from 'web3';

import fs from "fs";
let rawdata = fs.readFileSync("./blockchain/build/contracts/WorkUrFreedomContract.json");
let WorkUrFreedomContract = JSON.parse(rawdata);

// console.log(WorkUrFreedomContract.address);

// Export these components so that other files can use them
export const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

const deploymentKey = Object.keys(WorkUrFreedomContract.networks)[0];
export const workUrFreedomContract = new web3.eth.Contract(
  WorkUrFreedomContract.abi, 
  WorkUrFreedomContract
    .networks[deploymentKey]
    .address
);