import { UPDATE_QUIZ_DATA } from "../actions/QuizDataActions";
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_QUIZ_DATA:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};
