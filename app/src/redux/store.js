import { configureStore } from '@reduxjs/toolkit';
import quizzesReducer from './quizzesSlice';

export default configureStore({
  reducer: {
    quizzes: quizzesReducer,
  }
})
