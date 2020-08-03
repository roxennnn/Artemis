import { workUrFreedomContract, web3 } from "../server.js";
import { getCurrentDatetime } from "../models/utilities.js";

import db from "../models/index.js";
const User = db.user;

// ONLY FOR TESTING
const OWNER_ADDR = "0x55958faddf67d6051fe7f5f9bff015531c09d4ed";

export const submitSurveyAnswers = async (req, res) => {
  console.log(req.body);
  console.log(req.path);
  console.log(req.userId);

  const survey = req.path.split("/api/survey/")[1];
  const answers = req.body.arr;
  const userId = req.body.userId;
  const currentTimestamp = getCurrentDatetime();

  let userAddr;
  try {
    // Query mongoDB
    const user = await User.findOne({ id: userId }, { eth_address: 1 }).exec();

    // Check if the user has been found
    if (!user) {
      console.log("USER NOT FOUND");
      return res.status(404).send({ message: "User Not found." });
    }

    // Get the user addr
    userAddr = user.eth_address;
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
    return;
  }

  console.log(`USERADDR: ${userAddr}`);

  console.log(survey);
  if (survey === "demographics") {
    console.log("HERE WE ARE");
    let result;
    try {
      result = await workUrFreedomContract.methods
        .addDemographicsAnwsers(userAddr, answers)
        .send({ from: OWNER_ADDR, gas: 6721975 });

      // CHECK THE RESULT IS SAVED IN THE BLOCKCHAIN
      // let result2 = await workUrFreedomContract.methods.getUserData().call({ from: userAddr });
      // console.log(result2);
    } catch (err) {
      console.log(`THIS IS THE ERRROR: ${err}`);
      res.status(600).send({ message: err });
      return;
    }
    // console.log(result);
    res.status(200).send();

    // TODO:
    // - check the result is correct (DONE)
    // - get timestamp (DONE)
    // - update mongoDB data
  } else if (survey === "experience") {
    console.log(survey);
    res.status(299).send({ message: "testing" });
    return;
  } else if (survey === "skills") {
    console.log(survey);
    res.status(299).send({ message: "testing" });
    return;
  } else {
    res.status(404).send({ message: "ERROR: Not an available survey" });
  }
};

// NOT USED...
export const signup = (req, res) => {
  console.log(req.body);
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
// export const signupCitizen = (req, res) => {
//   // not the best approach for production --> @TOFIX

//   // Generate a public(address)-private key pair
//   // let addressData = Wallet.default.generate();   // RIGHT APPROACH

//   // USING TRUFFLE ADDRESSES
//   if (crazyId >= 10) {
//     process.exit();
//   }
//   // Kind of random generated address (?)
//   const address = addresses[crazyId];
//   const priv_key = priv_keys[crazyId];
//   crazyId++;
//   console.log(`CRAZYID: ${crazyId}`);

//   const user = new User({ // survey data are not stored, defult values used
//     username: req.body.username,
//     email: hashSync(req.body.email, 8),
//     password: hashSync(req.body.password, 8),
//     // eth_address: addressData.getAddressString(), // used when random generated
//     // priv_key: addressData.getPrivateKeyString(), // used when random generated
//     eth_address: address,                           // used only now, for pre-set addresses
//     priv_key: priv_key,                             // used only now, for pre-set addresses
//   });

//   user.save((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     } else {
//       res.status(200).send();
//     }
//   });
// };

// // import { formContractWithOwner, web3 } from "../server.js";

// // TO BE @FIXED
// export const signupOrganization = async (req, res) => {
//   // not the best approach for production --> @TOFIX

//   // Generate a public(address)-private key pair
//   // let addressData = Wallet.default.generate();   // RIGHT APPROACH

//   // USING TRUFFLE ADDRESSES
//   if (crazyId >= 10) {
//     process.exit();
//   }
//   // Kind of random generated address (?)
//   const address = addresses[crazyId];
//   const priv_key = priv_keys[crazyId];
//   crazyId++;
//   console.log(crazyId);

//   const user = new User({ // survey data are not stored, defult values used
//     organization: req.body.organization,
//     email: req.body.email,
//     password: hashSync(req.body.password, 8),
//     // eth_address: addressData.getAddressString(), // used when random generated
//     // priv_key: addressData.getPrivateKeyString(), // used when random generated
//     eth_address: address,                           // used only now, for pre-set addresses
//     priv_key: priv_key,                             // used only now, for pre-set addresses
//   });

//   // SUPER USEFUL BLOCKCHAIN STUFF

//   // let result;
//   // try {
//   //   result = await formContractWithOwner.methods
//   //     .addNewUser(req.body.organization, req.body.email, address)
//   //     // .send({from: accounts[0]})
//   //     // .send({ from: addressData.getAddressString() })
//   //     .send({ from: OWNER_ADDR, gas: 6721975 });

//   //   console.log(`Result1: ${result}`);

//   //   let result2 = await formContractWithOwner.methods.getUserData().call({ from: address });

//   //   console.log(`Result2: ${result2}`);
//   // } catch (err) {
//   //   console.log(`THIS IS THE ERROR: ${err}`);
//   // }

//   user.save((err, user) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send({ message: err });
//       return;
//     } else {
//       res.status(200).send();
//     }
//   });
// };
