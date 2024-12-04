import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementScore } from './../../redux/userSlice';

import { useParams } from 'react-router-dom';
import './../../style/base.css';
export const useQuizLogic = () => {
  const quizzes = useSelector((state) => state.quizzes);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState({});

  const { id } = useParams();
  // console.log(id);
  console.log(user);

  const quiz = quizzes.find((quiz) => quiz.id === parseInt(id));
  // console.log(quizzes);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    // let score = 0;

    quiz.questions.forEach((question) => {
      const userAnswer = answers[question.id];

      if (
        (question.type === "multiple-choice" && userAnswer === question.correctAnswer) ||
        (question.type === "input" && userAnswer === question.correctAnswer)
      ) {
        dispatch(incrementScore());

        // score++;
      }
    });

  }
  return {
    quiz,
    handleAnswerChange,
    handleSubmit,
  };
}
