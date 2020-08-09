import mongoose from "mongoose";

import db from "../models/index.js";
const User = db.user;
const Occupation = db.occupation;

import { workUrFreedomContract } from "../server.js";

const skillNames = [
  "Organise basic activities",
  "Perform administrative tasks ",
  "Process payments",
  "Handle money",
  "Administer financial information",
  "Perform cleaning activities (at home)",
  "Perform cleaning activities in an environment beyond home",
  "Perform basic first aid",
  "Act as a leader",
  "Work under pressure",
  "Work in a team",
  "Drive a car",
  "Conduct basic food preparation",
  "Cook meat and fish",
  "Cook vegetables and dairy products",
  "Cook pasta",
  "Prepare deserts such as pastries",
  "Prepare fish for cooking",
  "Prepare sandwiches",
  "Prepare drinks such as cocktails or speciality coffees",
  "Present food in an appealing manner",
  "Understand diets and nutitional properties of food",
  "Keep a clean kitchen",
  "Maintain cooking equipment",
  "Operate cooking equipment",
  "Greet guests",
  "Serve food and drinks",
  "Work with recipes",
  "Store food safely",
  "Apply make-up",
  "Perform nail care treatments",
  "Perform skin care treatments",
  "Remove body hair",
  "Give massages",
  "Wash and style hair",
  "Cut perm and colour hair",
  "Treat minor problems with the hair or scalp",
  "Provide information and give instructions",
  "Write information in a clear way",
  "Collect information",
  "Understand and answer technical questions",
  "Understand and follow guidelines",
  "Assist people and give advices",
  "Guide tourists or other visitors",
  "Be familiar with the local culture",
  "Assist guests during events",
  "Plan and organise activities for guests",
  "Manage groups of people",
  "Assist people with mobility",
  "Maintain good public relations",
  "Interpret and respond adequately to people's emotions",
  "Speak more than one language",
  "Provide care and assistance to children",
  "Assist children in learning",
  "Provide school assistance",
  "Help children with special learning difficulties",
  "Help children to resolve personal psychological or social problems",
  "Run domestic care activities",
  "Assist people with disabilities",
  "Assist elderly people",
];

export const fetchMatchings = async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.userId);
  // console.log(userId);

  const skillScores = await getSkillScores(userId);
  if (skillScores.length === 0) {
    res.status(404).send({ message: `Fetching skills data error: ${err}` });
    return;
  }

  const occupations = await getOccupationList();
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
      score += ((skillScores[cat] - 1) / 3) * 100; // from 0 to 3
    }

    const meanScore = score / categoriesNum;
    // const percentScore = meanScore * 100;

    let scored = {};
    scored["score"] = meanScore.toFixed(2);
    scored["OID"] = occupation["OID"];
    let title = occupation["title"];
    if (title.includes("/")) {
      title = title.split("/")[1];
    } else if (title === "pizzaiolo") {
      title = "pizzaiola";
    }
    scored["title"] = title.charAt(0).toUpperCase() + title.slice(1);

    scoredOccupations.push(scored);
  }

  scoredOccupations.sort(compareOccupations);

  res.status(200).send({ scoredOccupations });
  return;
};

export const fetchOccupationDetail = async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.userId);
  const skillScores = await getSkillScores(userId);
  if (skillScores.length === 0) {
    res.status(404).send({ message: `Fetching skills data error: ${err}` });
    return;
  }

  const occupation = await getOccupationDetail(req.params.oid);
  if (!occupation) {
    res
      .status(404)
      .send({ message: `Fetching occupations data error: ${err}` });
    return;
  }

  const categoryIds = occupation.categories;

  let categoryScores = [];
  for (let c = 0; c < categoryIds.length; c++) {
    const cat = categoryIds[c];
    categoryScores.push((((skillScores[cat] - 1) / 3) * 100).toFixed(2));
  }

  // What to respond
  let details = {};

  let title = occupation.title;
  if (title.includes("/")) {
    title = title.split("/")[1];
  } else if (title === "pizzaiolo") {
    title = "pizzaiola";
  }
  details.title = title.charAt(0).toUpperCase() + title.slice(1);
  details.description = occupation.description;
  details.categories = occupation.categories;
  details.category_names = occupation.category_names;
  details.category_scores = categoryScores.sort((a, b) => {
    return b - a;
  });

  res.status(200).send({ details });
  return;
};

export const fetchSkills = async (req, res) => {
  const userId = mongoose.Types.ObjectId(req.userId);

  const skillScores = await getSkillScores(userId);
  if (skillScores.length === 0) {
    res.status(404).send({ message: `Fetching skills data error: ${err}` });
    return;
  }

  const scores = [];
  if (skillScores.length !== skillNames.length) {
    console.log("skill array lenghts are different...");
    res.status(500).send({ message: "skill array lenghts are different..." });
  }
  for (let i = 0; i < skillScores.length; i++) {
    let name = skillNames[i];
    let score = (skillScores[i] - 1) / 3 * 100;
    scores.push({ name: name, score: score.toFixed(2) });
  }

  scores.sort(compareSkills);
  res.status(200).send({ scores });
  return;
};

// Utilities

const compareOccupations = (a, b) => {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
};

const compareSkills = (a, b) => {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
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

const getOccupationDetail = async (oid) => {
  let occupation;
  try {
    occupation = await Occupation.findOne({ OID: oid }).exec();
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
  return occupation;
};
