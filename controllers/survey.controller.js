import mongoose from "mongoose";
import { artemisContract } from "../server.js";
import { getCurrentDatetime } from "../models/utilities.js";

import db from "../models/index.js";
const User = db.user;

// ONLY FOR TESTING
const OWNER_ADDR = "0x0d2c952dc556f65e8b3e89208c00cd54f4b9bf9b";
const GAS_LIMIT = 5550000; // I DON'T KNOW HOW TO SET THIS VALUE!

export const submitSurveyAnswers = async (req, res) => {
  // Debugging logs
  // console.log(req.body);
  // console.log(req.path);

  // Useful variables
  const survey = req.path.split("/api/survey/")[1];
  const answers = req.body.arr;
  const userId = mongoose.Types.ObjectId(req.userId);
  const currentTimestamp = getCurrentDatetime();
  let userAddr;

  // Debugging logs
  // console.log(userId);

  try {
    // Query mongoDB: get the corresponding Ethereum address
    const user = await User.findOne({ _id: userId }, { eth_address: 1 }).exec();

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

  // Debugging logs
  console.log(`USERADDR: ${userAddr}`);
  console.log(currentTimestamp);
  console.log(survey);

  try {
    if (survey === "demographics") {
      const result = await artemisContract.methods
        .addDemographicsAnwsers(userAddr, answers)
        .send({ from: OWNER_ADDR, gas: GAS_LIMIT });

      // CHECK WHAT IS SAVED IN THE BLOCKCHAIN
      // let result2 = await artemisContract.methods.getUserData().call({ from: userAddr });
      // console.log(result2);

      const updateResult = await User.findOneAndUpdate(
        { _id: userId },
        { demographics_done: true, demographics_timestamp: currentTimestamp }
      );

      // Debugging logs
      // console.log(result);
      // console.log(updateResult);
    } else if (survey === "domestic") {
      const result = await artemisContract.methods
        .addExperienceAnwsers(userAddr, answers)
        .send({ from: OWNER_ADDR, gas: GAS_LIMIT });

      // CHECK WHAT IS SAVED IN THE BLOCKCHAIN
      // let result2 = await artemisContract.methods.getUserData().call({ from: userAddr });
      // console.log(result2);

      const updateResult = await User.findOneAndUpdate(
        { _id: userId },
        { experience_done: true, experience_timestamp: currentTimestamp }
      );

      // Debugging logs
      // console.log(result);
      // console.log(updateResult);
    } else if (survey === "skills") {
      const result = await artemisContract.methods
        .addSkillsAnwsers(userAddr, answers)
        .send({ from: OWNER_ADDR, gas: GAS_LIMIT });

      // CHECK WHAT IS SAVED IN THE BLOCKCHAIN
      let result2 = await artemisContract.methods
        .getUserData()
        .call({ from: userAddr });
      console.log(result2);

      const updateResult = await User.findOneAndUpdate(
        { _id: userId },
        { skills_done: true, skills_timestamp: currentTimestamp }
      );

      // Debugging logs
      // console.log(result);
      // console.log(updateResult);
    } else {
      res.status(404).send({ message: "ERROR: Not an available survey" });
    }
  } catch (err) {
    console.log(`THIS IS THE ERRROR: ${err}`);
    res.status(600).send({ message: `Blockchain error: ${err}` });
    return;
  }

  // Operation successful
  res.status(200).send();
  return;
};

export const queryProfileData = async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.userId);
  let user;

  try {
    user = await User.findOne(
      { _id: userId },
      {
        username: 1,
        demographics_done: 1,
        demographics_timestamp: 1,
        experience_done: 1,
        experience_timestamp: 1,
        skills_done: 1,
        skills_timestamp: 1,
        eth_address: 1,
      }
    ).exec();

    if (user.demographics_done) {
      let demo = await artemisContract.methods
        .getDemographicsData()
        .call({ from: user.eth_address });

      const returnUser = {
        username: user.username,
        demographics_done: user.demographics_done,
        demographics_timestamp: user.demographics_timestamp,
        experience_done: user.experience_done,
        experience_timestamp: user.experience_timestamp,
        skills_done: user.skills_done,
        skills_timestamp: user.skills_timestamp,
        geoPosition: [demo[1], demo[2]],
      };
      user = returnUser;
    }

    // user.location = [demo[1], demo[2]];
    user.eth_address = "nope";

    res.status(200).send({ user });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
    return;
  }
};

export const resetSurveyData = async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.userId);
  const survey = req.path.split("/api/survey/reset-")[1].split("-survey")[0];

  console.log(survey);
  // console.log("HEY");

  if (survey === "demographic") {
    User.update(
      { _id: userId },
      { $set: { demographics_done: false } },
      function (err) {
        if (err) {
          console.log(`Reset error: ${err}.`);
          return res.send(500, { error: err });
        }
        return res.send(200, "Succesfully resetted.");
      }
    );
  } else if (survey === "skills") {
    User.update({ _id: userId }, { $set: { skills_done: false } }, function (
      err
    ) {
      if (err) {
        console.log(`Reset error: ${err}.`);
        return res.send(500, { error: err });
      }
      return res.send(200, "Succesfully resetted.");
    });
  } else if (survey === "domestic") {
    User.update(
      { _id: userId },
      { $set: { experience_done: false } },
      function (err) {
        if (err) {
          console.log(`Reset error: ${err}.`);
          return res.send(500, { error: err });
        }
        return res.send(200, "Succesfully resetted.");
      }
    );
  }
};
