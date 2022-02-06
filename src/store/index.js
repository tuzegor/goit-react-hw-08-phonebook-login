import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './contacts/filterSlice';
// import { contactsApi } from './contacts/contactsApi';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authReducer,
    contacts: contactsReducer,
  },

  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   contactsApi.middleware,
  // ],
});

setupListeners(store.dispatch);
