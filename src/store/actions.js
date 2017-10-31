import { createAction } from "redux-actions";
import fetchRandomJoke from "../api/random";

export const RANDOM_JOKE_REQUESTED = "RANDOM_JOKE_REQUESTED";
export const RANDOM_JOKE_SUCCEEDED = "RANDOM_JOKE_SUCCEEDED";
export const RANDOM_JOKE_FAILED = "RANDOM_JOKE_FAILED";

export const randomJokeRequested = createAction(RANDOM_JOKE_REQUESTED);
export const randomJokeSucceeded = createAction(RANDOM_JOKE_SUCCEEDED);
export const randomJokeFailed = createAction(RANDOM_JOKE_FAILED);

export const startRandomJokeRequest = () => dispatch => {
  dispatch(randomJokeRequested());
  fetchRandomJoke()
    .toPromise()
    .then(response => dispatch(randomJokeSucceeded(response)))
    .catch(error => dispatch(randomJokeFailed(error)));
};
