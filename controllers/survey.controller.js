import mongoose from 'mongoose';
import { artemisContract } from '../server.js';
import { getCurrentDatetime } from '../models/utilities.js';

import db from '../models/index.js';
const User = db.user;

// ONLY FOR TESTING
const OWNER_ADDR = '0x0d2c952dc556f65e8b3e89208c00cd54f4b9bf9b';
const GAS_LIMIT = 5550000; // I DON'T KNOW HOW TO SET THIS VALUE!

export const submitSurveyAnswers = async (req, res) => {
  // Useful variables
  const survey = req.path.split('/api/survey/')[1];
  const answers = req.body.answers;

  const userId = mongoose.Types.ObjectId(req.userId);
  const currentTimestamp = getCurrentDatetime();
  let userAddr;

  try {
    // Query mongoDB: get the corresponding Ethereum address
    const user = await User.findOne({ _id: userId }, { eth_address: 1 }).exec();

    // Check if the user has been found
    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }

    // Get the user addr
    userAddr = user.eth_address;
  } catch (err) {
    return res.status(500).send({ message: err });
  }

  try {
    if (survey === 'demographics') {
      await artemisContract.methods
        .addDemographicsAnwsers(userAddr, answers)
        .send({ from: OWNER_ADDR, gas: GAS_LIMIT });

      // CHECK WHAT IS SAVED IN THE BLOCKCHAIN
      // let result2 = await artemisContract.methods.getUserData().call({ from: userAddr });

      await User.findOneAndUpdate(
        { _id: userId },
        { demographics_done: true, demographics_timestamp: currentTimestamp }
      );
    } else if (survey === 'domestic') {
      await artemisContract.methods
        .addDomesticAnwsers(userAddr, answers)
        .send({ from: OWNER_ADDR, gas: GAS_LIMIT });

      const x = await User.findOneAndUpdate(
        { _id: userId },
        { domestic_done: true, domestic_timestamp: currentTimestamp }
      );
    } else if (survey === 'skills') {
      await artemisContract.methods
        .addSkillsAnwsers(userAddr, answers)
        .send({ from: OWNER_ADDR, gas: GAS_LIMIT });

      await User.findOneAndUpdate(
        { _id: userId },
        { skills_done: true, skills_timestamp: currentTimestamp }
      );
    } else {
      res.status(404).send({ message: 'ERROR: Not an available survey' });
    }
  } catch (err) {
    res.status(600).send({ message: `Blockchain error: ${err.message}` });
    return;
  }

  // Operation successful
  res.status(200).send({ timestamp: currentTimestamp });
  return;
};

export const resetSurveyData = async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.userId);
  const survey = req.path.split('/api/survey/reset/')[1];

  if (survey === 'demographics') {
    User.updateOne(
      { _id: userId },
      { $set: { demographics_done: false } },
      (err) => {
        if (err) {
          return res.send(500, { error: err.message });
        }
        return res.send(200, 'Succesfully resetted.');
      }
    );
  } else if (survey === 'skills') {
    User.updateOne({ _id: userId }, { $set: { skills_done: false } }, (err) => {
      if (err) {
        return res.send(500, { error: err.message });
      }
      return res.send(200, 'Succesfully resetted.');
    });
  } else if (survey === 'domestic') {
    User.updateOne(
      { _id: userId },
      { $set: { domestic_done: false } },
      (err) => {
        if (err) {
          return res.send(500, { error: err.message });
        }
        return res.send(200, 'Succesfully resetted.');
      }
    );
  }
};
