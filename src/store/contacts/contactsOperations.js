import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchGetContacts,
  fetchAddContacts,
  fetchDeleteContact,
} from './contactsApi';

export const getContacts = createAsyncThunk(`contacts/get`, async jwtToken => {
  const response = await fetchGetContacts(jwtToken);
  return response;
});
export const addContacts = createAsyncThunk(
  `contacts/add`,
  async ({ contact, token }) => {
    const response = await fetchAddContacts(contact, token);
    return response;
  },
);

export const deleteContact = createAsyncThunk(
  `contacts/delete`,
  async ({ token, id }) => {
    await fetchDeleteContact(token, id);
    return id;
  },
);
