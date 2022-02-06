import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchSignUp,
  fetchLogin,
  fetchLogout,
  fetchCurrentUser,
} from './authApi';

export const register = createAsyncThunk(`auth/signup`, async userData => {
  const response = await fetchSignUp(userData);
  return response;
});
export const login = createAsyncThunk(`auth/login`, async userData => {
  const response = await fetchLogin(userData);
  return response;
});

export const logout = createAsyncThunk(`auth/logout`, async data => {
  const response = await fetchLogout(data);
  return response;
});

export const currentUser = createAsyncThunk(`auth/current`, async data => {
  const response = await fetchCurrentUser(data);
  return response;
});
