import { createAction } from "redux-actions";
import randomJokeAPI from "../api/random";
import searchJokeAPI from "../api/search";

export const SEARCH_TEXT_CHANGED = "SEARCH_TEXT_CHANGED";

export const RANDOM_JOKE_REQUESTED = "RANDOM_JOKE_REQUESTED";
export const RANDOM_JOKE_SUCCEEDED = "RANDOM_JOKE_SUCCEEDED";
export const RANDOM_JOKE_FAILED = "RANDOM_JOKE_FAILED";

export const SEARCH_JOKE_REQUESTED = "SEARCH_JOKE_REQUESTED";
export const SEARCH_JOKE_SUCCEEDED = "SEARCH_JOKE_SUCCEEDED";
export const SEARCH_JOKE_FAILED = "SEARCH_JOKE_FAILED";

export const searchTextChanged = createAction(SEARCH_TEXT_CHANGED);

export const randomJokeRequested = createAction(RANDOM_JOKE_REQUESTED);
export const randomJokeSucceeded = createAction(RANDOM_JOKE_SUCCEEDED);
export const randomJokeFailed = createAction(RANDOM_JOKE_FAILED);

export const searchJokeRequested = createAction(SEARCH_JOKE_REQUESTED);
export const searchJokeSucceeded = createAction(SEARCH_JOKE_SUCCEEDED);
export const searchJokeFailed = createAction(SEARCH_JOKE_FAILED);

export const startRandomJokeRequest = () => dispatch => {
  dispatch(randomJokeRequested());
  randomJokeAPI()
    .toPromise()
    .then(response => dispatch(randomJokeSucceeded(response)))
    .catch(error => dispatch(randomJokeFailed(error)));
};

export const startSearchJokeRequest = term => dispatch => {
  dispatch(searchJokeRequested());
  searchJokeAPI(term)
    .toPromise()
    .then(response => dispatch(searchJokeSucceeded(response)))
    .catch(error => dispatch(searchJokeFailed(error)));
};
