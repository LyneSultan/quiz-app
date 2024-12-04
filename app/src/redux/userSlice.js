import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    score: 0,
  },
  reducers: {
    incrementScore: (state) => {
      return {
        score: state.score + 1
      }
    },
  },
});

export const { incrementScore } = userSlice.actions;
export default userSlice.reducer;
