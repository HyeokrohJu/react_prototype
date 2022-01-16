import { combineReducers } from '@reduxjs/toolkit';
import github from './github';

/**
 * Root Reducer 생성
 *
 * @param {(State | undefined)} [state={} as State]
 * @param {AnyAction} action
 * @return {*}  {State}
 */
const combineReducer = combineReducers({
  github,
});

export default combineReducer;
