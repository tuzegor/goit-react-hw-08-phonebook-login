import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, currentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {
      state.error = action.error.name;
      alert('Problem with registration');
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      state.error = action.error.name;
      alert('User not found');
    },
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [currentUser.fulfilled](state, action) {
      state.user = action.payload;

      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
