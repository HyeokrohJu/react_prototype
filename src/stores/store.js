import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

/**
 * Development Mode 확인
 */
const devMode = process.env.NODE_ENV === 'development';

/**
 * Store 생성
 *
 * @return {*}  {EnhancedStore}
 */
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: devMode,
});

sagaMiddleware.run(rootSaga);

export default store;
