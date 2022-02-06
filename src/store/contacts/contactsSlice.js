import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContact } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [getContacts.fulfilled](state, action) {
      return action.payload;
    },
    [addContacts.fulfilled](state, action) {
      return [...state, action.payload];
    },
    [deleteContact.fulfilled](state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
