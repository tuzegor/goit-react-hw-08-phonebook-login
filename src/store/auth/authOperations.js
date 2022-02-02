import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSignUp, fetchLogin } from './authApi';

export const register = createAsyncThunk(`auth/signup`, async userData => {
  const response = await fetchSignUp(userData);
  return response;
});
export const login = createAsyncThunk(`auth/signup`, async userData => {
  const response = await fetchLogin(userData);
  return response;
});
