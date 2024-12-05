import TextField from '@mui/material/TextField';
import Input from './../../base/Input/Input';

const QuestionCard = ({ question, handleAnswerChange }) => {
  return (
    <div key={question.id}>
      <p>{question.question}</p>

      {question.type === 'multiple-choice' ? (
        <div>
          {question.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                name={question.id}
                onChange={() => handleAnswerChange(question.id, option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <Input
            placeholder="Type your answer"
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
          <TextField
            id={`text-field-${question.id}`}
            label="Your Answer"
            variant="outlined"
            placeholder="Type here"
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
