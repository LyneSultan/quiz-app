import { Quiz } from "../models/quiz.model.js";

export const createQuiz = async (req, res) => {
  const { title, questions } = req.body;

  try {
    if (!title || !questions) {
      return res.status(500).send({
        message: "All feilds are required",
      });
    }

    const quizData = {
      title,
      questions: questions.map((q) => ({
        question: q.question,
        options: q.options || [],
        correctAnswer: q.correctAnswer || "",
        type: q.type || "multiple-choice",
      })),
    };

    const quiz = await Quiz.create(quizData);


    return res.status(200).send({ quiz });

  } catch (error) {
    console.log(error.message);

    return res.status(500).send({
      message: "Something went wrong",
    });
  }
}

export const getQuizzes = async (req, res) => {

  try {
    const quizzes = await Quiz.find();

    return res.json(quizzes);
  } catch (error) {
    console.log(error.message);

    return res.status(500).send({
      message: "Something went wrong",
    });
  }
};
