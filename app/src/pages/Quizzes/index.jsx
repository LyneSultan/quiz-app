import React from 'react';
import { useSelector } from 'react-redux';
import QuizCard from './../../components/QuizCard.jsx';
import './../../style/base.css';
import { useQuizzesLogic } from './useQuizzesLogic.js';

const Quizzes = () => {
  const user = useSelector((state) => state.user);

  const { quizzes, handleNavigate } = useQuizzesLogic();
  return (

    <div>
      <div className='flex column align-center'>
        <h1>Welcome to Quizzes</h1>
        <h2>Score:{user.score}</h2>
      </div>

      {!quizzes ?
        <h1>no quizzes</h1>
        :
        <div >
          <div className='flex space-around'>
            {quizzes.map((quiz) => {
              return (
                <QuizCard quiz={quiz} handleNavigate={handleNavigate} />
              );
            })}

          </div>
        </div>
      }
    </div >
  );
};

export default Quizzes;
