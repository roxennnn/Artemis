import authJwt from "../middleware/authJwt.js";
import { submitSurveyAnswers, queryProfileData  } from "../controllers/survey.controller.js";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/survey/vars",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    queryProfileData
  );

  app.post(
    "/api/survey/demographics",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    submitSurveyAnswers
  );

  app.post(
    "/api/survey/experience",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    submitSurveyAnswers
  );

  app.post(
    "/api/survey/skills",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    submitSurveyAnswers
  );
}
