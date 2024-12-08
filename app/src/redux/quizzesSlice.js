import { createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: [],
  },
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },

  },
});

export const { setQuizzes } = quizzesSlice.actions;

export default quizzesSlice.reducer;
