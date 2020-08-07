import mongoose from "mongoose";
let { Promise } = mongoose;
Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

import User from "./user.model.js";
import Occupation from "./occupation.model.js";

db.user = User;
db.occupation = Occupation

export default db;
