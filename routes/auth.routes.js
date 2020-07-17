import verifySignUp from "../middleware/verifySignUp.js";
import { signupOrganization, signupCitizen, signin } from "../controllers/auth.controller.js";

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
    "/api/auth/signup/organization",
    [
      verifySignUp.checkDuplicateEmail,
      verifySignUp.checkRolesExisted,
    ],
    signupOrganization
  );

  app.post(
    "/api/auth/signup/citizen",
    [
      verifySignUp.checkDuplicateEmail,
      verifySignUp.checkRolesExisted,
    ],
    signupCitizen
  );

  app.post("/api/auth/signin", signin);
}
