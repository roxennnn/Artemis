import Wallet from 'ethereumjs-wallet';

import { secret } from '../config/auth.config.js';
import { artemisContract } from '../server.js';

import db from '../models/index.js';
const User = db.user;
const Organisation = db.organisation;

import jsonwebtoken from 'jsonwebtoken';
const { sign } = jsonwebtoken;

import bcryptjs from 'bcryptjs';
import { CustomError } from '../models/error.js';
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

let crazyId = 1;
const OWNER_ADDR = addresses[0];
// *************************************************************
////////////////////////////////////////////////////////////////

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

  user.save((err, _usr) => {
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
  const address = OWNER_ADDR; // bad approach, just for the video demo --> in the future, add "organisation addresses list" in the smart contract

  const organisation = new Organisation({
    organisationName: req.body.organisationName,
    email: hashSync(req.body.email, 8),
    password: hashSync(req.body.password, 8),
    eth_address: address,
  });

  organisation.save((err, _org) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send();
    }
  });
};

export const signin = async (req, res) => {
  let user;
  let organisation;

  try {
    user = await User.findOne(
      { username: req.body.username } // get the whole data
    ).exec();

    if (!user) {
      organisation = await Organisation.findOne({
        organisationName: req.body.username,
      }).exec();
    }

    if (!user && !organisation) {
      throw new CustomError('Invalid Credentials', 501);
    } else {
      const passwordIsValid = compareSync(req.body.password, user.password);
      if (!passwordIsValid) {
        throw new CustomError('Invalid Password', 502);
      }

      let userId = user ? user.id : organisation.id;

      let returnData;
      if (user) {
        userId = user.id;

        returnData = {
          username: user.username,
          organisation: false,
          demographicsDone: user.demographics_done,
          demographicsTimestamp: user.demographics_timestamp,
          domesticDone: user.domestic_done,
          domesticTimestamp: user.domestic_timestamp,
          skillsDone: user.skills_done,
          skillsTimestamp: user.skills_timestamp,
        };

        if (user.demographics_done) {
          const geo = await artemisContract.methods // FixMeLater?
            .getDemographicsData()
            .call({ from: user.eth_address });
          returnData = {
            ...returnData,
            geoPosition: [geo[1], geo[2]],
          };
        }
      } else {
        userId = organisation.id;
        returnData = {
          username: organisation.organisationName, // needed to show it when the user is logged
          organisation: true,
          demographicsDone: false,
          skillsDone: false,
          domesticDone: false,
        };
      }

      const token = sign({ id: userId }, secret, {
        expiresIn: 86400, // 24 hours
      });

      return res.status(200).send({
        accessToken: token,
        user: returnData,
      });
    }
  } catch (err) {
    return res
      .status(err.statusCode ? err.statusCode : 500)
      .send({ message: err.message });
  }
};
