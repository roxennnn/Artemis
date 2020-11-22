import Wallet from 'ethereumjs-wallet';

import { secret } from '../config/auth.config.js';
import db from '../models/index.js';
const User = db.user;
const Organisation = db.organisation;

import jsonwebtoken from 'jsonwebtoken';
const { sign } = jsonwebtoken;

import bcryptjs from 'bcryptjs';
const { hashSync, compareSync } = bcryptjs;

// "WHY DID I USE THESE ADDRESSES??"
///////////////////////////////////////////////////////////////
// ***********************************************************
// ONLY FOR TESTING
const addresses = [
  '0x0d2c952dc556f65e8b3e89208c00cd54f4b9bf9b',
  '0x6ba62c69fcf2dbe26b6a8bec123c627b09f51ccf',
  '0xcd4a38fd4317938246818ab0f14a6577d2af0e74',
  '0xc5fc18a96d723c2db3fd05af55f2b04ae595bb05',
  '0xe89b3bc56b9aeb72d86f214f9469c904bec7e307',
  '0xd150b6fe6662dc0082ed0c73b616aabf5c7db322',
  '0x8e25e61f17bd900c336ac52e94bd5aa4667b8ada',
  '0x0c35f38f04ed3ad3adcbe5211e55e7ea1104810c',
  '0xb9305c740ee54a7aa8899fc14b279185c7af39aa',
  '0x48c35dc0d12a8362dcbd6b23364b3054d83ae6f6',
];

const priv_keys = [
  'f63f4571aea34657c8b1b3886638b66387a4673f00c91cd6777d09a2bafad72f',
  'b3a38a3c4019e9c0552fca8d8d57564a0115f0d9dc1c0d6d86d965331c907a1b',
  'a62f380f5e6497c41a491ac96788db74d5f8172f5ab0f6230e7bb7938cf7cad0',
  '28777f99d9c473eca3765be43136b61ec7e84fc52b5fb405762ff572c3dce6fc',
  '577b44893282600de6b29e6dce7a1aff7c86cee6ec9b1cd63060785b3fc1092e',
  '1963c5be984f4d733e49e29fbd316c26f41c7798d9d1d56b686382cd75e4bc39',
  '1545c4b4706af8a8999c7f102023770e046e8a7e3354b6ab494ed62e784c64ba',
  '0155bc0606504a6a4332458179ab1af8cbe1fa964c9abbfe71a7d260241e73d4',
  'bd10fc99d7ecb47f319ed2aab69e3ddb497066a817fc4cc549a1f303e4fb5a98',
  '747cfa99d27cbac04f0d8211dc7e0253ba96f9466eb99905d545c8507f7e92d2',
];

let crazyId = 1;
const OWNER_ADDR = addresses[0];
// *************************************************************
////////////////////////////////////////////////////////////////

// NOT USED...
// export const signup = (req, res) => {
//   console.log(req.body);
//   z;
//   const user = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: hashSync(req.body.password, 8),
//   });

//   user.save((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }
//   });
// };

// Add smartcontract communication
export const signupWoman = (req, res) => {
  // not the best approach for production --> @TOFIX

  // Generate a public(address)-private key pair
  let addressData = Wallet.default.generate(); // RIGHT APPROACH

  // // USING TRUFFLE ADDRESSES
  // if (crazyId >= 10) {
  //   process.exit();
  // }
  // Kind of random generated address (?)
  // const address = addresses[crazyId];
  // const priv_key = priv_keys[crazyId];
  // crazyId++;
  // console.log(`CRAZYID: ${crazyId}`);

  const user = new User({
    // survey data are not stored, defult values used
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

export const signupOrganisation = async (req, res) => {
  // Generate a public(address)-private key pair
  // let addressData = Wallet.default.generate();   // RIGHT APPROACH
  let address = OWNER_ADDR; // bad approach, just for the video demo --> in the future, add "organisation addresses list" in the smart contract

  const organisation = new Organisation({
    organisationName: req.body.organisationName,
    email: hashSync(req.body.email, 8),
    password: hashSync(req.body.password, 8),
    eth_address: address,
  });

  organisation.save((err, organisation) => {
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
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      Organisation.findOne({
        organisationName: req.body.username,
      }).exec((err, organisation) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (!organisation) {
          console.log('USER NOT FOUND');
          return res.status(404).send({ message: 'User Not found.' });
        }

        var passwordIsValid = compareSync(
          req.body.password,
          organisation.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            message: 'Invalid Password!',
          });
        }

        var token = sign({ id: organisation.id }, secret, {
          expiresIn: 86400, // 24 hours
        });

        return res.status(200).send({
          accessToken: token,
          username: organisation.organisationName, // needed to show it when the user is logged
          organisation: true,
        });
      });
      // console.log("USER NOT FOUND");
      // return res.status(404).send({ message: "User Not found." });
    } else {
      var passwordIsValid = compareSync(req.body.password, user.password);

      if (!passwordIsValid) {
        return res.status(401).send({
          message: 'Invalid Password!',
        });
      }

      var token = sign({ id: user.id }, secret, {
        expiresIn: 86400, // 24 hours
      });

      return res.status(200).send({
        accessToken: token,
        username: user.username, // needed to show it when the user is logged
      });
    }
  });
};
