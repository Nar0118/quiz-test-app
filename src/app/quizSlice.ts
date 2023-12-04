import { createSlice } from "@reduxjs/toolkit";
import { QuizState } from "./types";

const initialState: QuizState = {
  currentQuestionIndex: 0,
  answers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      state.answers[state.currentQuestionIndex] = action.payload;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    prevQuestion: (state) => {
      state.currentQuestionIndex -= 1;
    },
    resetQuiz: () => initialState,
  },
});

export const { answerQuestion, nextQuestion, prevQuestion, resetQuiz } =
  quizSlice.actions;
export const selectQuiz = (state: any) => state.quiz;
export default quizSlice.reducer;
