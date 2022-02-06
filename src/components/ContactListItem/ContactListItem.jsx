import React from 'react';
import { useSelector } from 'react-redux';
import style from './ContactListItem.module.css';
// import { useDeleteContactMutation } from '../../store/contacts/contactsApi';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import Loader from '../Loader/Loader';
import { getToken } from '../../store/auth/authSelectors';
import { deleteContact } from '../../store/contacts/contactsOperations.js';

export default function ContactListItem({ contact }) {
  const { id, name, number } = contact;
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  return (
    <li className={style.item}>
      <span>
        {name}: {number}
      </span>
      <button
        className={style.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact({ token, id }))}
        // disabled={isDeleting}
      >
        delete
        {/* {isDeleting ? <Loader /> : 'Delete'} */}
      </button>
    </li>
  );
}

// ContactListItem.propTypes = {
//   contact: PropTypes.object,
// };
