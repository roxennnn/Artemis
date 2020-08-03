import Wallet from "ethereumjs-wallet";

import { secret } from "../config/auth.config.js";
import db from "../models/index.js";
const User = db.user;

import jsonwebtoken from "jsonwebtoken";
const { sign } = jsonwebtoken;

import bcryptjs from "bcryptjs";
const { hashSync, compareSync } = bcryptjs;

// "WHY DID I USE THESE ADDRESSES??"
///////////////////////////////////////////////////////////////
// ***********************************************************
// ONLY FOR TESTING
const addresses = [
  "0x55958faddf67d6051fe7f5f9bff015531c09d4ed",
  "0xecd30d8b0e147bfca67096ea647454ce4c2998b5",
  "0x35bae80efca4c9e865d5c9174dd4b2f9dbf0791d",
  "0x6e39680ebbfa517369710bb5f5506adf09bc96d9",
  "0x4733edd60d7bfce50a813e7416b28d5e0662154c",
  "0xdd43d3bfb2d5330693b8fc57734449831afc0fe4",
  "0x804a7152dbfba7a1718aa2595d13de3f0a23a85c",
  "0x690c98b88f3ae942f7f9a6ea60ce66cfe2d0a18f",
  "0x40e0c539d66b6da80d3a30ce435ab204460e4850",
  "0x80d2f61163ad941895f573bbfcd7447c7340f36f",
];

const priv_keys = [
  "b15b50d6de19a40386af995e8851d55f7249d4f944bbf884c6cbc21be8e3f643",
  "c66242bf1ce2ce48055317012db942bae1edd7625f5cba48c269a58b553b97d4",
  "d827e6ad290a77c5339d5b435f53ff962bd28f234e2454e7cd43815b7fd53321",
  "3cbc376535bbc3f4ea8933b812ee8640acea9a17a8cf37a71d951b16bb5c30a6",
  "9b4962b740dae453b3c7c6e23eae625014da6edce357ae9c9d6e76f881197ef9",
  "8686fcc75b5fec653da3eeec2febb7c8ff9c5c2dda236eb5a36f8b4f4f882a0d",
  "0d26dba0dc1e3c40df0fac0c88728a3fb2e1ad12fcb49e962e8bc85547902d0b",
  "c41c04039a23a3f202872e79b53fea75badcb1e8d0b04fe91292a98d03ff365c",
  "fce4be96bba64e04fc2d493a0f231c76b171e2f41ef52f7bd290ec13f58adabf",
  "599d7c8ac083a71d890da9d8569b8a3ed99ea20e7e0ae84792d01997c30f6274",
];

let crazyId = 1;
const OWNER_ADDR = addresses[0];
// *************************************************************
////////////////////////////////////////////////////////////////

// NOT USED...
export const signup = (req, res) => {
  console.log(req.body);
  z;
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });
};

// Add smartcontract communication
export const signupCitizen = (req, res) => {
  // not the best approach for production --> @TOFIX

  // Generate a public(address)-private key pair
  let addressData = Wallet.default.generate();   // RIGHT APPROACH
  
  // // USING TRUFFLE ADDRESSES
  // if (crazyId >= 10) {
  //   process.exit();
  // }
  // Kind of random generated address (?)
  // const address = addresses[crazyId];
  // const priv_key = priv_keys[crazyId];
  // crazyId++;
  // console.log(`CRAZYID: ${crazyId}`);

  const user = new User({ // survey data are not stored, defult values used
    username: req.body.username,
    email: hashSync(req.body.email, 8),
    password: hashSync(req.body.password, 8),
    eth_address: addressData.getAddressString(), // used when random generated
    priv_key: addressData.getPrivateKeyString(), // used when random generated
    // eth_address: address,                           // used only now, for pre-set addresses
    // priv_key: priv_key,                             // used only now, for pre-set addresses
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send();
    }
  });
};

// import { formContractWithOwner, web3 } from "../server.js";

// TO BE @FIXED 
export const signupOrganization = async (req, res) => {
  // not the best approach for production --> @TOFIX

  // Generate a public(address)-private key pair
  // let addressData = Wallet.default.generate();   // RIGHT APPROACH
  
  // USING TRUFFLE ADDRESSES
  if (crazyId >= 10) {
    process.exit();
  }
  // Kind of random generated address (?)
  const address = addresses[crazyId];
  const priv_key = priv_keys[crazyId];
  crazyId++;
  console.log(crazyId);

  const user = new User({ // survey data are not stored, defult values used
    organization: req.body.organization,
    email: req.body.email,
    password: hashSync(req.body.password, 8),
    // eth_address: addressData.getAddressString(), // used when random generated
    // priv_key: addressData.getPrivateKeyString(), // used when random generated
    eth_address: address,                           // used only now, for pre-set addresses
    priv_key: priv_key,                             // used only now, for pre-set addresses
  });

  // SUPER USEFUL BLOCKCHAIN STUFF

  // let result;
  // try {
  //   result = await formContractWithOwner.methods
  //     .addNewUser(req.body.organization, req.body.email, address)
  //     // .send({from: accounts[0]})
  //     // .send({ from: addressData.getAddressString() })
  //     .send({ from: OWNER_ADDR, gas: 6721975 });

  //   console.log(`Result1: ${result}`);

  //   let result2 = await formContractWithOwner.methods.getUserData().call({ from: address });

  //   console.log(`Result2: ${result2}`);
  // } catch (err) {
  //   console.log(`THIS IS THE ERROR: ${err}`);
  // }


  user.save((err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send();
    }
  });
};

export const signin = (req, res) => {
  // console.log(req.body.email);
  // const hashedEmail = hashSync(req.body.email, 8);
  // console.log(hashedEmail);
  User.findOne({
    username: req.body.username,
  })
    // .populate("roles", "-__v") // like SQL joins --> but we don't have Roles anymore
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        console.log("USER NOT FOUND");
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = compareSync(req.body.password, user.password);

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = sign({ id: user.id }, secret, {
        expiresIn: 86400, // 24 hours
      });

      // send data
      // res.status(200).send({
      //   id: user._id,
      //   email: user.email,
      //   address: user.eth_address,
      //   priv_key: user.priv_key,
      //   accessToken: token,
      // });

      // OR: keep all the user data in the DB approach: access it only when needed, using the ID
      // data to be returned when the user signs in... thus, returning the username (for the profile) and the survey information would be useful
      res.status(200).send({
        // id: user._id, // can be easily retrieved from the token
        accessToken: token,

        // Other information which may be useful
        username: user.username,  // needed to show it when the user is logged
        // useful information for the user survey page --> user the other service instead
        // demographicsDone: user.demographics_done,
        // demographicsTimestamp: user.demographics_timestamp,
        // skillsDone: user.skills_done,
        // skillsTimestamp: user.skills_timestamp,
        // experienceDone: user.experience_done,
        // experienceTimestamp: user.experience_timestamp,
      });
    });
};
