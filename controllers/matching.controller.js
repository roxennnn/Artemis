import mongoose from "mongoose";

import db from "../models/index.js";
const User = db.user;
const Occupation = db.occupation;

import { workUrFreedomContract } from "../server.js";

export const fetchMatchings = async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.userId);
  // console.log(userId);

  // Should handle the case where no skill is fetched
  const skillScores = await getSkillScores(userId);
  // console.log(skillScores);
  if (skillScores.length === 0) {
    res.status(404).send({ message: `Fetching skills data error: ${err}` });
    return;
  }

  // Should handle the case where no occupation is fetched
  const occupations = await getOccupationList();
  // console.log(occupations.length);
  if (occupations.length === 0) {
    res
      .status(404)
      .send({ message: `Fetching occupations data error: ${err}` });
    return;
  }

  let scoredOccupations = [];
  for (let i = 0; i < occupations.length; i++) {
    const occupation = occupations[i];

    let score = 0;
    const categories = occupation["categories"];
    const categoriesNum = categories.length;
    for (let j = 0; j < categoriesNum; j++) {
      const cat = categories[j];
      score += skillScores[cat] - 1; // from 0 to 3
    }

    const meanScore = score / categoriesNum;
    const percentScore = (meanScore / 3) * 100;

    let scored = {};
    scored["score"] = Number(percentScore.toFixed(2));
    scored["OID"] = occupation["OID"];
    let title = occupation["title"];
    if (title.includes("/")) {
      title = title.split("/")[1];
    } else if (title === "pizzaiolo") {
      title = "pizzaiola";
    }
    scored["title"] = title;

    scoredOccupations.push(scored);
  }

  // console.log(scoredOccupations);
  res.status(200).send({ scoredOccupations });
  return;
};

const getSkillScores = async (userId) => {
  let scores = [];
  try {
    const user = await User.findOne(
      { _id: userId },
      { _id: 0, eth_address: 1 }
    ).exec();
    
    const userAddr = user["eth_address"];
    // console.log(userAddr);

    scores = await workUrFreedomContract.methods
      .getSkillsData()
      .call({ from: userAddr });
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
  return scores;
};

const getOccupationList = async () => {
  let occupations = [];
  try {
    occupations = await Occupation.find().exec();
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
  return occupations;
};
