import authJwt from "../middleware/authJwt.js";
import {
  fetchMatchings,
  fetchOccupationDetail,
  fetchSkills,
} from "../controllers/matching.controller.js";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/matching/:lang/occupation",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    fetchMatchings
  );

  app.get(
    "/api/matching/:lang/occupation/:oid",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    fetchOccupationDetail
  );

  app.get(
    "/api/matching/:lang/skill",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    fetchSkills
  );
};
