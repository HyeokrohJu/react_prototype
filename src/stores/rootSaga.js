import { all, fork } from 'redux-saga/effects';
import { githubSaga } from './github';

/**
 * Root Saga 생성
 *
 * @export
 * @return {*}  {Generator<AllEffect<ForkEffect<void>>, void, unknown>}
 */
export default function* rootSaga() {
  yield all([fork(githubSaga)]);
}
