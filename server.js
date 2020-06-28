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

// @TOFIX
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


// Maybe, this things should be done when the user logs in --> and without document --> because we handle it in the backend only
// Init smart contract

// import {initWeb3, initContract} from "./blockchain/contractInit";

// document.addEventListener('DOMContentLoaded', () => {
//   initWeb3()
//     .then(_web3 => {
//       web3 = _web3;
//       crud = initContract();
//       initApp(); 
//     })
//     .catch(e => console.log(e.message));
// });
