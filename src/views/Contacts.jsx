import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { authSelectors, getToken } from '../store/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { getContacts } from '../store/contacts/contactsOperations.js';
import { getContactsFromStore } from '../store/contacts/contactsSelector';

export default function Contacts() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const contacts = useSelector(getContactsFromStore);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getContacts(token));
    }
  }, [dispatch, token]);

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
