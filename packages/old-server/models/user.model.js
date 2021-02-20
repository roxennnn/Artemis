import mongoose from "mongoose";
const { model, Schema } = mongoose;

const User = model(
  "User",
  new Schema({
    // Necessary for end-user
    username: {
      type: String,
      required: true,  // organisations do not use usernames...
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    eth_address: {
      type: String,
      required: true,
    },
    priv_key: {
      type: String,
      required: true,
    },
    // Surveys:
    // - Demographics
    demographics_done: {
      type: Boolean,
      default: false,
    },
    demographics_timestamp: String,
    // - Skillz
    skills_done: {
      type: Boolean,
      default: false,
    },
    skills_timestamp: String,
    // - Experience
    domestic_done: {
      type: Boolean,
      default: false,
    },
    domestic_timestamp: String,
  })
);

export default User;
