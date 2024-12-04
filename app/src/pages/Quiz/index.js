import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementScore } from './../../redux/userSlice';

import { useParams } from 'react-router-dom';
import './../../style/base.css';
const Quiz = () => {
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

  };

  return (
    <>{!quiz ? <h1>Not a valid quiz id</h1> :
      <div>
        <h2>{quiz.title}</h2>
        <h3>Questions:</h3>
        <div>
          {quiz.questions.map((question) => (
            <div key={question.id}>
              <p>{question.question}</p>

              {question.type === "multiple-choice" ? (
                <div>
                  {question.options.map((option, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        name={question.id}
                        onChange={() => handleAnswerChange(question.id, option)}
                      />
                      <label >{option}</label>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <input
                    type="text"
                    placeholder="Your answer"
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </div>}
    </>
  );



}
export default Quiz;
