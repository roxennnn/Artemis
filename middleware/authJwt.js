import jsonwebtoken from 'jsonwebtoken';
const { verify } = jsonwebtoken;

import { secret } from '../config/auth.config.js';
import { CustomError } from '../models/error.js';

const verifyToken = (req, res, next) => {
  try {
    let token = req.headers['x-access-token'];
    if (!token) {
      throw new CustomError('No token provided', 400);
    }

    verify(token, secret, (err, decoded) => {
      if (err) {
        throw new CustomError('Unauthorised', 401);
      }
      req.userId = decoded.id;
      next();
    });
  } catch (err) {
    return res
      .status(err.statusCode ? err.statusCode : 510)
      .send({ message: err.message });
  }
};

const authJwt = {
  verifyToken,
};

export default authJwt;
