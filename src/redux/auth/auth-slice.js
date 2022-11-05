import { register, login, logout, fetchCurrentUser } from './auth-operations';
import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLoading: false,
    isLoggedIn: false,
    error: null,
    isFetching: false,
  },
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
      state.error = false;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [login.pending]: state => {
      state.isLoading = true;
      state.error = false;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [logout.pending]: state => {
      state.isLoading = true;
      state.error = false;
    },
    [logout.fulfilled]: (state, { payload }) => {
      state.token = null;
      state.user = { name: '', email: '' };
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.isFetching = true;
      state.error = false;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isFetching = false;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.isFetching = false;
    },
  },
});

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
