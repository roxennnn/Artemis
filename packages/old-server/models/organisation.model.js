import mongoose from "mongoose";
const { model, Schema } = mongoose;

const Organisation = model(
  "Organisation",
  new Schema({
    // Necessary for end-user
    organisationName: {
      type: String,
      required: true, // organisations do not use usernames...
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
    // priv_key: {
    //   type: String,
    //   required: true,
    // },
    validated: Boolean, // to be used in future
  })
);

export default Organisation;
