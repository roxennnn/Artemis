import mongoose from "mongoose";
const { model, Schema } = mongoose;

const Occupation = model(
  "Occupation",
  new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String, 
      required: true
    },
    OID: {
      type: Number,
      required: true,
    },
    categories: {
      type: Array,
      required: true
    },
    category_names: {
      type: Array,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  }),
  "occupation"
);

export default Occupation;
