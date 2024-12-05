
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import { ButtonComponent } from '../../base/Button/Button';
import Input from './../../base/Input/Input';
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
                  <Input placeholder="here" onChange={(e) => handleAnswerChange(question.id, e.target.value)} />
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" type="text"
                    placeholder="Your answer"
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)} />

                </div>
              )}
            </div>
          ))}
        </div>

        <ButtonComponent onClick={handleSubmit} text="submit" />
      </div>}
    </>
  );



}
export default Quiz;
