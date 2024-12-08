import axios from "axios";

export const quizData = () => {
  return axios.get("http://localhost:8080/users/getQuizzes")
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching quiz data:", error);
      throw error;
    });
};
