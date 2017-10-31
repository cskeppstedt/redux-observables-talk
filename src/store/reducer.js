import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState = {
  error: null,
  isLoading: false,
  text: ""
};

export default handleActions(
  {
    [actions.RANDOM_JOKE_REQUESTED]: (state, action) => ({
      ...state,
      isLoading: true
    }),

    [actions.RANDOM_JOKE_SUCCEEDED]: (state, action) => ({
      ...state,
      isLoading: false,
      text: action.payload.joke
    }),

    [actions.RANDOM_JOKE_FAILED]: (state, action) => ({
      ...state,
      isLoading: false,
      text: "Something went wrong :(",
      error: action.payload
    })
  },
  initialState
);
