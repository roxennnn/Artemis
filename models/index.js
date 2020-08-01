import mongoose from "mongoose";
let { Promise } = mongoose;
Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

import User from "./user.model.js";

db.user = User;

export default db;
