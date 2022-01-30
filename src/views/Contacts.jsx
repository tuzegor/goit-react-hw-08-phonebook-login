import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { useFetchContactsQuery } from '../store/contacts/contactsApi';

export default function Contacts() {
  const { data: contacts } = useFetchContactsQuery();
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm contacts={contacts} />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList contacts={contacts} />
    </>
  );
}
