// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require("cors");

// const app = express();

// let corsOptions = {
//   origin: "http://localhost:5001"
// };

// app.use(cors(corsOptions));
// app.use(bodyParser.json());

// const db = require("./models");
// const dbConfig = require("./config/db.config");
// const Role = db.role;

// db.mongoose
//   .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Successfully connect to MongoDB.");
//     initial();
//   })
//   .catch(err => {
//     console.error("Connection error", err);
//     process.exit();
//   });

// // DB is used to store login data of the users
// // mongoose.Promise = global.Promise;
// // mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/workUrFreedom`);

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));

//   const path = require('path');
//   app.get('*', (req,res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })

// }

// // routes
// require('./routes/auth.routes')(app);
// require('./routes/user.routes')(app);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`app running on port ${PORT}`)
// });

// const initial = () => {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         name: "moderator"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'moderator' to roles collection");
//       });

//       new Role({
//         name: "admin"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }

import express from "express";
import bodyParser from "body-parser";
const { json, urlencoded } = bodyParser;
import cors from "cors";

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


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to workUrFreedom application." });
});

// routes
import auth_routes from "./routes/auth.routes.js";
import user_routes from "./routes/user.routes.js";
auth_routes(app);
user_routes(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

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
