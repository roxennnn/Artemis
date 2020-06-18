import { configureStore } from "redux-starter-kit";

import users from "./users";
import auth from "./auth";

export default configureStore({
  reducer: {
    users,
    auth,
  },
});