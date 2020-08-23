import mongoose from "mongoose";
let { Promise } = mongoose;
Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

import User from "./user.model.js";
import Organisation from "./organisation.model.js";
import Occupation from "./occupation.model.js";

db.user = User;
db.organisation = Organisation;
db.occupation = Occupation

export default db;
