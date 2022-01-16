import { createSelector, createSlice } from '@reduxjs/toolkit';

/**
 * 기본 State 생성
 */
const initialState = {
  loading: false,
  error: null,
  data: null,
};

/**
 * Redux-Toolkit Slice 생성
 */
const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    gitUserProfileRequest: (state, _action) => {
      state.loading = true;
      state.error = null;
    },
    gitUserProfileSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    gitUserProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = githubSlice;
export const { gitUserProfileRequest, gitUserProfileSuccess, gitUserProfileFailure } = actions;

export const githubState = state => state.github;

export const githubBio = createSelector(githubState, github => {
  return github.data?.bio;
});

export default reducer;
