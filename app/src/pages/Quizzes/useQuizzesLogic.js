import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { quizData } from "../../data/quizzzes_data";
import { setQuizzes } from "../../redux/quizzesSlice";
import { routes } from "../../routes/routes";
export const useQuizzesLogic = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { quizzes } = useSelector((state) => state.quizzes);

  const handleNavigate = (id) => {
    navigate(routes.quiz(id));
  };
  console.log(quizzes);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await quizData();
        dispatch(setQuizzes(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);
  console.log(quizzes);
  return { quizzes, handleNavigate };

}
