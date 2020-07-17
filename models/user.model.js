import mongoose from "mongoose";
const { model, Schema } = mongoose;

const User = model(
  "User",
  new Schema({
    organization: String,
    firstName: String,
    lastName: String,
    birthday: String,
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    eth_address: {
      type: String,
      required: true
    },
    priv_key: {
      type: String,
      required: true
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

export default User;
