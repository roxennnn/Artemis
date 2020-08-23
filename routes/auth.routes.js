import verifySignUp from "../middleware/verifySignUp.js";
import {
  signupOrganisation,
  signupWoman,
  signin,
} from "../controllers/auth.controller.js";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // I WOULD HAVE PREFERRED USING PARAMS .... (IT DID NOT WORK) -> in the paths

  app.post(
    "/api/auth/signup/organisation",
    [verifySignUp.checkDuplicateOrganisation],
    signupOrganisation
  );

  app.post(
    "/api/auth/signup/woman",
    [verifySignUp.checkDuplicateUser],
    signupWoman
  );

  app.post("/api/auth/signin", signin);
};
