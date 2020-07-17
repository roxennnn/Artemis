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

const Role = db.role;

db.mongoose
  .connect(`mongodb://${HOST}:${_PORT}/${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });


// routes
import auth_routes from "./routes/auth.routes.js";
import user_routes from "./routes/user.routes.js";
auth_routes(app);
user_routes(app);

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

// Create new roles in the DB
const initial = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
};

// TEST
import Web3 from 'web3';

// import fs from "fs";
// let rawdata = fs.readFileSync("./blockchain/build/contracts/TestFormContract.json");
// let TestFormContract = JSON.parse(rawdata);

import fs from "fs";
let rawdata = fs.readFileSync("./blockchain/build/contracts/FormContractWithOwner.json");
let FormContractWithOwner = JSON.parse(rawdata);

// console.log(TestFormContract.address);
console.log(FormContractWithOwner.address);

export const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));


// const deploymentKey = Object.keys(TestFormContract.networks)[0];
// // let TestFormContract = web3.eth.contract([YOUR_ABI]);
// export const testFormContract = new web3.eth.Contract(
//   TestFormContract.abi, 
//   TestFormContract
//     .networks[deploymentKey]
//     .address
// );
const deploymentKey = Object.keys(FormContractWithOwner.networks)[0];
// let TestFormContract = web3.eth.contract([YOUR_ABI]);
export const formContractWithOwner = new web3.eth.Contract(
  FormContractWithOwner.abi, 
  FormContractWithOwner
    .networks[deploymentKey]
    .address
);

// app.post('/upload', function(req, res) {

//     Student.createStudents(studentName,studentAccYear, hashCode, {gas: '195253'});

//     var studentEvent = Student.studentInfo();
//     studentEvent.watch(function(error, result){
//     if (!error)
//         {
//             console.log(result);
//             } else {
//             console.log(error);
//         } 
//         return;
//    });

// });