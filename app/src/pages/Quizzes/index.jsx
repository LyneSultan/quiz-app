import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routes } from './../../routes/routes.js';
import './../../style/base.css';
const Quizzes = () => {
  const quizzes = useSelector((state) => state.quizzes);
  const navigate = useNavigate();

  console.log(routes);


  const handleNavigate = (id) => {
    navigate(routes.quiz(id));
  };

  return (
    <div>
      {!quizzes ? <h1>no quizzes</h1> :
        <div >
          <h1>Available Quizzes</h1>

          <div className='flex space-around'>
            {quizzes.map((quiz) => (
              < div key={quiz.id}>
                <div>{quiz.title}</div>
                <button onClick={() => handleNavigate(quiz.id)}>click me</button>
              </div>
            ))}
          </div>
        </div>
      }
    </div >
  );



}
export default Quizzes;
