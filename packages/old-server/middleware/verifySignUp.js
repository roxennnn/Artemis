import bcryptjs from 'bcryptjs';
import { CustomError } from '../models/error.js';
const { hashSync } = bcryptjs;

import db from '../models/index.js';
const User = db.user;
const Organisation = db.organisation;

const checkDuplicateUser = async (req, res, next) => {
  try {
    // Username
    let user = await User.findOne({
      username: req.body.username,
    }).exec();

    if (user) {
      throw new CustomError('Failed! Username is already in use!', 400);
    }

    // Email // - need to handle the hashed email
    const hashedEmail = hashSync(req.body.email, 8);
    user = await User.findOne({
      email: hashedEmail,
    }).exec();

    if (user) {
      throw new CustomError('Failed! Email is already in use!', 400);
    }

    next();
  } catch (err) {
    return res
      .status(err.statusCode ? err.statusCode : 500)
      .send({ message: err.message });
  }
};

const checkDuplicateOrganisation = async (req, res, next) => {
  try {
    // Organisation
    let organisation = await Organisation.findOne({
      organisationName: req.body.organisationName,
    }).exec();

    if (organisation) {
      throw new CustomError(
        'Failed! Organisation Name is already in use!',
        400
      );
    }

    // Email // - need to handle the hashed email
    const hashedEmail = hashSync(req.body.email, 8);
    organisation = await Organisation.findOne({
      email: hashedEmail,
    }).exec();

    if (organisation) {
      throw new CustomError('Failed! Email is already in use!', 400);
    }

    next();
  } catch (err) {
    return res
      .status(err.statusCode ? err.statusCode : 500)
      .send({ message: err.message });
  }
};

const verifySignUp = {
  checkDuplicateUser,
  checkDuplicateOrganisation,
};

export default verifySignUp;
