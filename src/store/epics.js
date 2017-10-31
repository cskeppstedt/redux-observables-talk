import { RANDOM_JOKE_REQUESTED } from "../store/actions";

export const testEpic = action$ =>
  action$.ofType(RANDOM_JOKE_REQUESTED).map(action => ({
    type: "NOTHING_YET",
    payload: { seenAction: action }
  })).ignoreElements();
