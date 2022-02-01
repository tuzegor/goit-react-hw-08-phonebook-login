import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSignUp } from './userApi';

export const register = createAsyncThunk(`auth/signup`, async userData => {
  const response = await fetchSignUp(userData);
  console.log(response);
  return response;
});
