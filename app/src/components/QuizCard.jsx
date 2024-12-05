import { CardContent, Typography } from '@mui/material';
import { ButtonComponent } from './../base/Button/Button.jsx';

const QuizCard = ({ quiz, handleNavigate }) => {
  return (
    <>
      <CardContent>
        <Typography variant="h6" component="div">
          {quiz.title}
        </Typography>
      </CardContent>
      <CardContent>
        <ButtonComponent
          variant="contained"
          color="primary"
          onClick={() => handleNavigate(quiz.id)}
          text="Take this Quiz"
        />

      </CardContent>
    </>
  );
};

export default QuizCard;
