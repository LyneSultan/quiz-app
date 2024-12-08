import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { incrementScore } from './../../redux/userSlice';
import { routes } from './../../routes/routes';
import './../../style/base.css';

export const useQuizLogic = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const quizzes = useSelector((state) => state.quizzes);
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState({});


  const quiz = quizzes.quizzes.find((quiz) => quiz._id === String(id));

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
  const handleBack = () => {
    navigate(routes.quizzes);
  }

  return {
    quiz,
    handleAnswerChange,
    handleSubmit,
    handleBack
  };
}
