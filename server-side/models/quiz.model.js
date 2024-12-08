import { Schema, model } from "mongoose";

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    default: [],
  },
  correctAnswer: {
    type: String,
  },
  type: {
    type: String,
    enum: ["multiple-choice", "input"],
    default: "multiple-choice",
  },
});

const quizSchema = new Schema({
  title: {
    type: String,
  },
  questions: [questionSchema],
});

export const Quiz = model("Quiz", quizSchema);
