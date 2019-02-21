import axios from "axios";

/** Action Types */
export const UPDATE_QUIZ_DATA = "update-quiz-data";
export const UPDATE_ERROR = "update-error";

export const fetchQuizData = (callback, callbackError) => {
  const url = createPlatformURL("api.php");

  const params = {
    amount: 10,
    difficulty: "hard",
    type: "boolean"
  };

  return dispatch => {
    axios
      .get(url, createMutationHeaders(params))
      .then(res => {
        dispatch(updateQuizData(res.data));
        callback && callback();
      })
      .catch(error => {
        dispatch(updateError(error));
        callbackError && callbackError();
      });
  };
};

export const updateQuizDataWithAnswers = (data, callback) => {
  return dispatch => {
    dispatch(updateQuizData(data));
    callback && callback();
  };
};

export const createPlatformURL = api => {
  let publicUrl = `${"https://opentdb.com/"}/${api}`;
  return encodeURI(publicUrl);
};

export const createMutationHeaders = additionalParams => {
  return {
    params: Object.assign({}, additionalParams)
  };
};

export const updateQuizData = data => {
  return {
    type: UPDATE_QUIZ_DATA,
    payload: data
  };
};

export const updateError = data => {
  return {
    type: UPDATE_ERROR,
    payload: data
  };
};
