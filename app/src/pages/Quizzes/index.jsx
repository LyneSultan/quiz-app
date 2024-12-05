import Card from '@mui/material/Card';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuizCard from '../../components/QuizCard.jsx';
import { routes } from './../../routes/routes.js';
import './../../style/base.css';

const Quizzes = () => {
  const quizzes = useSelector((state) => state.quizzes);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(routes.quiz(id));
  };

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
            {quizzes.map((quiz) => (
              <Card variant="outlined" key={quiz.id}>
                <QuizCard quiz={quiz} handleNavigate={handleNavigate} />
              </Card>
            ))}
          </div>
        </div>
      }
    </div >
  );
}
export default Quizzes;
