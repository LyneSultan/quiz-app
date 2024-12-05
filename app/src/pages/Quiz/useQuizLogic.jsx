import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementScore } from './../../redux/userSlice';

import { useParams } from 'react-router-dom';
import './../../style/base.css';
export const useQuizLogic = () => {
  const quizzes = useSelector((state) => state.quizzes);
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState({});

  const { id } = useParams();

  const quiz = quizzes.find((quiz) => quiz.id === parseInt(id));

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {

    quiz.questions.forEach((question) => {
      const userAnswer = answers[question.id];

      if ((question.type === "multiple-choice" && userAnswer === question.correctAnswer) ||
        (question.type === "input" && userAnswer === question.correctAnswer)) {
        dispatch(incrementScore());
      }
    });

  }
  return {
    quiz,
    handleAnswerChange,
    handleSubmit,
  };
}
