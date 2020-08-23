import bcryptjs from "bcryptjs";
const { hashSync } = bcryptjs;

import db from "../models/index.js";
const User = db.user;
const Organisation = db.organisation;

const checkDuplicateUser = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    // Email // - need to handle the hashed email
    const hashedEmail = hashSync(req.body.email, 8);
    User.findOne({
      email: hashedEmail,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
  });
};

const checkDuplicateOrganisation = (req, res, next) => {
  // Organisation
  Organisation.findOne({
    organisationName: req.body.organisationName,
  }).exec((err, organisation) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (organisation) {
      res
        .status(400)
        .send({ message: "Failed! Organisation Name is already in use!" });
      return;
    }

    // Email // - need to handle the hashed email
    const hashedEmail = hashSync(req.body.email, 8);
    Organisation.findOne({
      email: hashedEmail,
    }).exec((err, organisation) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (organisation) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
  });
};

const verifySignUp = {
  checkDuplicateUser,
  checkDuplicateOrganisation,
};

export default verifySignUp;
