import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './../../style/base.css';

const Quiz = () => {
  const quizzes = useSelector((state) => state.quizzes);
  const user = useSelector((state) => state.user);

  const { id } = useParams();
  // console.log(id);
  console.log(user);

  const quiz = quizzes.find((quiz) => quiz.id === parseInt(id));
  // console.log(quiz);

  return (
    <>{!quiz ? <h1>not a valid quiz id</h1> :
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
                      <input type="radio" name={question.id} id={`option-${index}`} />
                      <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <input type="text" placeholder="Your answer" />
                </div>
              )}
              <button>submit</button>
            </div>
          ))}
        </div>
      </div>}
    </>
  )



}
export default Quiz;
