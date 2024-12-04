import { configureStore } from '@reduxjs/toolkit';
import quizzesReducer from './quizzesSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    quizzes: quizzesReducer,
    user: userReducer,

  }
})
