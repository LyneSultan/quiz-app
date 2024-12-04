import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../base/Button/Button.jsx';
import { routes } from './../../routes/routes.js';
import './../../style/base.css';

const Quizzes = () => {
  const quizzes = useSelector((state) => state.quizzes);
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  console.log(user);

  const handleNavigate = (id) => {
    navigate(routes.quiz(id));
  };

  return (

    <div>
      <h2>Score:{user.score}</h2>
      {!quizzes ? <h1>no quizzes</h1> :

        <div >
          <div className='flex space-around'>

            {quizzes.map((quiz) => (
              < div key={quiz.id}>
                <div>{quiz.title}</div>
                <Button onClick={() => handleNavigate(quiz.id)} text="Click me" />
              </div>
            ))}
          </div>
        </div>
      }
    </div >
  );



}
export default Quizzes;
