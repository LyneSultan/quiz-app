
import { useParams } from 'react-router-dom';
import './../../style/base.css';
import { useQuizLogic } from './useQuizLogic';

const Quiz = () => {

  const { id } = useParams();
  const { quiz, handleAnswerChange, handleSubmit } = useQuizLogic(id);

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
