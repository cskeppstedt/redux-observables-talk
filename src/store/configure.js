import "rxjs";
import { createStore, compose, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import thunk from "redux-thunk";
import * as epics from "./epics";
import reducer from "./reducer";

export default () => {
  // blergh, really wish the combineEpics API was a bit more flexible :)
  const epicList = Object.values(epics);
  const rootEpic =
    epicList.length > 1 ? combineEpics(...epicList) : epicList[0];
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(...[epicMiddleware, thunk]))
  );
};
