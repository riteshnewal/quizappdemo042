import { combineReducers } from "redux";
import QuizDataReducer from "./QuizDataReducer";

export const reducers = combineReducers({
  quizData: QuizDataReducer
});
