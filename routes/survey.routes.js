import authJwt from "../middleware/authJwt.js";
import { submitSurveyAnswers, resetSurveyData  } from "../controllers/survey.controller.js";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Reset
  app.get(
    "/api/survey/reset/demographics",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    resetSurveyData
  );

  app.get(
    "/api/survey/reset/skills",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    resetSurveyData
  );

  app.get(
    "/api/survey/reset/domestic",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    resetSurveyData
  );

  // POST answers
  app.post(
    "/api/survey/demographics",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    submitSurveyAnswers
  );

  app.post(
    "/api/survey/domestic",
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
