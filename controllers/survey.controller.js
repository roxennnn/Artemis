import mongoose from 'mongoose';
import { artemisContract } from '../server.js';
import { getCurrentDatetime } from '../models/utilities.js';
import db from '../models/index.js';

import { CustomError } from '../models/error.js';
import Survey from '../models/survey.enum.js';

const User = db.user;

// ONLY FOR TESTING
const OWNER_ADDR = '0x0d2c952dc556f65e8b3e89208c00cd54f4b9bf9b';
const GAS_LIMIT = 5550000; // I DON'T KNOW HOW TO SET THIS VALUE!

export const submitSurveyAnswers = async (req, res) => {
  // Useful variables
  // const survey = req.path.split('/api/survey/')[1];
  const survey = req.params.survey;
  const answers = req.body.answers;

  const userId = mongoose.Types.ObjectId(req.userId);
  const currentTimestamp = getCurrentDatetime();
  let userAddr;

  try {
    // Query mongoDB: get the corresponding Ethereum address
    const user = await User.findOne({ _id: userId }, { eth_address: 1 }).exec();

    // Check if the user has been found
    if (!user) {
      throw new CustomError('User Not Found', 404);
    }

    // Get the user addr
    userAddr = user.eth_address;
  } catch (err) {
    return res
      .status(err.statusCode ? err.statusCode : 500)
      .send({ message: err });
  }

  try {
    if (survey === Survey.demographics) {
      await artemisContract.methods
        .addDemographicsAnwsers(userAddr, answers)
        .send({ from: OWNER_ADDR, gas: GAS_LIMIT });

      // CHECK WHAT IS SAVED IN THE BLOCKCHAIN
      // let result2 = await artemisContract.methods.getUserData().call({ from: userAddr });

      await User.findOneAndUpdate(
        { _id: userId },
        { demographics_done: true, demographics_timestamp: currentTimestamp }
      );
    } else if (survey === Survey.domestic) {
      await artemisContract.methods
        .addDomesticAnwsers(userAddr, answers)
        .send({ from: OWNER_ADDR, gas: GAS_LIMIT });

      const x = await User.findOneAndUpdate(
        { _id: userId },
        { domestic_done: true, domestic_timestamp: currentTimestamp }
      );
    } else if (survey === Survey.skills) {
      await artemisContract.methods
        .addSkillsAnwsers(userAddr, answers)
        .send({ from: OWNER_ADDR, gas: GAS_LIMIT });

      await User.findOneAndUpdate(
        { _id: userId },
        { skills_done: true, skills_timestamp: currentTimestamp }
      );
    } else {
      return res
        .status(404)
        .send({ message: 'ERROR: Not an available survey' });
    }
  } catch (err) {
    return res
      .status(600)
      .send({ message: `Blockchain error: ${err.message}` });
  }

  // Operation successful
  return res.status(200).send({ timestamp: currentTimestamp });
};

export const resetSurveyData = async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.userId);
  // const survey = req.path.split('/api/survey/reset/')[1];
  const survey = req.params.survey;

  try {
    if (survey === Survey.demographics) {
      User.updateOne({ _id: userId }, { $set: { demographics_done: false } });
      return res.send(200, 'Succesfully resetted.');
    } else if (survey === Survey.skills) {
      User.updateOne({ _id: userId }, { $set: { skills_done: false } });
      return res.send(200, 'Succesfully resetted.');
    } else if (survey === Survey.domestic) {
      User.updateOne({ _id: userId }, { $set: { domestic_done: false } });
      return res.send(200, 'Succesfully resetted.');
    }
  } catch (err) {
    return res
      .status(err.statusCode ? err.statusCode : 510)
      .send({ message: err.message });
  }
};
