import { call, put, takeLatest } from 'redux-saga/effects';

import { getUserProfile } from '@apis/github';
import { gitUserProfileFailure, gitUserProfileRequest, gitUserProfileSuccess } from './reducer';

/**
 * Redux-Saga 실행함수 생성
 *
 * @param {ReturnType<typeof gitUserProfileRequest>} action
 * @return {*}  {Generator<any, void, IGithubProfile>}
 */
function* getUserProfileSaga(action) {
  try {
    const userProfile = yield call(getUserProfile, action.payload);
    yield put(gitUserProfileSuccess(userProfile));
  } catch (e) {
    yield put(gitUserProfileFailure(e));
  }
}

/**
 * Redux Action Connect Redux Saga
 * Redux 액션과 Redux Saga 연결
 *
 * @export
 * @return {*}  {Generator<any, void, unknown>}
 */
export function* githubSaga() {
  yield takeLatest(gitUserProfileRequest.type, getUserProfileSaga);
}
