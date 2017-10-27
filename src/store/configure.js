import 'rxjs';
import {createStore, compose, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import reducer, {testEpic} from './app';

export default () => {
  const rootEpic = combineEpics(testEpic);
  const epicMiddleware = createEpicMiddleware(rootEpic);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );
};
