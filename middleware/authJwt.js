import jsonwebtoken from "jsonwebtoken";
const { verify } = jsonwebtoken;

import { secret } from "../config/auth.config.js";

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    console.log("No token provided!");
    return res.status(403).send({ message: "No token provided!" });
  }

  verify(token, secret, (err, decoded) => {
    if (err) {
      console.log("Unauthorised");
      return res.status(401).send({ message: "Unauthorized!" });
    }
    // console.log(decoded);
    // console.log(decoded.id);
    req.userId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken,
};

export default authJwt;
