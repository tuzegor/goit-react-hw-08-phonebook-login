import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './contacts/filter-slice';
import { contactsApi } from './contacts/contactsApi';
import { authReducer } from './auth/auth-slice';
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
