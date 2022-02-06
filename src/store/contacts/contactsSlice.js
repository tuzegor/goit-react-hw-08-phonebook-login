import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContact } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: {
    [getContacts.fulfilled](state, action) {
      //   console.log(action);
      return action.payload;
    },
    [addContacts.fulfilled](state, action) {
      //   console.log(action);
      return [...state, action.payload];
    },
    [deleteContact.fulfilled](state, action) {
      console.log(action);
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

// export const { registerFull } = authSlice.actions;
export const contactsReducer = contactsSlice.reducer;
