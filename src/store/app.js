import {createAction, handleActions} from 'redux-actions';

// constants
const FOO = 'FOO';
const MAPPED_FOO = 'MAPPED_FOO';

// action creators
export const foo = createAction(FOO);
export const mappedFoo = createAction(MAPPED_FOO);

// epics!
export const testEpic = action$ =>
  action$.ofType(FOO).mapTo(mappedFoo());

// reducer
const initialState = {
  text: '',
};

export default handleActions(
  {
    [FOO]: (state, action) => ({...state, text: 'foo'}),
    [MAPPED_FOO]: (state, action) => ({...state, text: 'mapped foo'}),
  },
  initialState,
);
