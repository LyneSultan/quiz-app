import { useParams } from 'react-router-dom';
import { ButtonComponent } from '../../base/Button/Button';
import Question from './../../components/QuestionCard';
import './../../style/base.css';
import { useQuizLogic } from './useQuizLogic';

const Quiz = () => {
  const { id } = useParams();
  const { quiz, handleAnswerChange, handleSubmit, handleBack } = useQuizLogic(id);

  return (
    <>
      {!quiz ? (
        <h1>Not a valid quiz id</h1>
      ) : (
        <div className='flex column align-center'>
          <h2>{quiz.title}</h2>
          <h3>Questions:</h3>
          <div>
            {quiz.questions.map((question) => (
              <Question
                key={question.id}
                question={question}
                handleAnswerChange={handleAnswerChange}
              />
            ))}
          </div>
          <div className='flex'>
            <ButtonComponent onClick={handleBack} text="Back" />
            <ButtonComponent onClick={handleSubmit} text="Submit" />
          </div>

        </div>
      )}
    </>
  );
};

export default Quiz;
