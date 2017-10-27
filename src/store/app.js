import {createAction, handleActions} from 'redux-actions';

// constants
const FOO = 'FOO';

// action creators
export const foo = createAction(FOO);

// epics!
export const testEpic = action$ =>
  action$.ofType(FOO).mapTo({type: 'MAPPED_FOO'});

// reducer
const initialState = {};
export default handleActions(
  {
    [FOO]: (state, action) => state,
  },
  initialState,
);
