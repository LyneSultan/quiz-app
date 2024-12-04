import { createSlice } from '@reduxjs/toolkit';
import { quizData } from './../data/quizzzes_data';

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: quizData,
  reducers: {
    loadQuizzes: () => { },
  }
})

export const { loadQuizzes } = quizzesSlice.actions;

export default quizzesSlice.reducer;
