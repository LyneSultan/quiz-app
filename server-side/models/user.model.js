import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,

  },
  password: {
    type: String,
  },
  score: {
    type: Number,
  }
});

export const User = model("User", userSchema);
