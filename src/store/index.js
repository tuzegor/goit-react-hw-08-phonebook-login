import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './contacts/filterSlice';
import { contactsApi } from './contacts/contactsApi';
import { authReducer } from './auth/authSlice';
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authReducer,

    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
