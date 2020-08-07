import authJwt from "../middleware/authJwt.js";
import {fetchMatchings} from "../controllers/matching.controller.js";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/matching/fetch-matchings",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    fetchMatchings
  );
}
