import authJwt from "../middleware/authJwt.js";
import { submitSurveyAnswers, queryProfileData, resetSurveyData  } from "../controllers/survey.controller.js";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Query
  app.get(
    "/api/survey/vars",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    queryProfileData
  );

  // Reset
  app.get(
    "/api/survey/reset-demographic-survey",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    resetSurveyData
  );

  app.get(
    "/api/survey/reset-skills-survey",
    [
      authJwt.verifyToken, // only authorised users can perform this operation
    ],
    resetSurveyData
  );

  app.get(
    "/api/survey/reset-experience-survey",
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
