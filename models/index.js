import mongoose from "mongoose";
let { Promise } = mongoose;
Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

import User from "./user.model.js";
import Role from "./role.model.js";

db.user = User;
db.role = Role;

db.ROLES = ["user", "admin", "moderator"];

export default db;
