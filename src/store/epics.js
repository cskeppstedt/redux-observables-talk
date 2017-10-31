import { Observable } from "rxjs";
import searchJoke from "../api/search";
import {
  SEARCH_TEXT_CHANGED,
  searchJokeRequested,
  searchJokeSucceeded,
  searchJokeFailed
} from "../store/actions";

export const searchEpic = action$ =>
  action$
    .ofType(SEARCH_TEXT_CHANGED)
    .filter(action => action.payload && action.payload.length > 2)
    .debounceTime(500)
    .distinctUntilChanged((x, y) => x.payload === y.payload)
    .switchMap(action =>
      Observable.concat(
        Observable.of(searchJokeRequested()),
        searchJoke(action.payload)
          .map(response => searchJokeSucceeded(response))
          .catch(error => Observable.of(searchJokeFailed(error)))
      )
    );
