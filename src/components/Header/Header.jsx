import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useDispatch } from 'react-redux';
import { authSelectors, getToken } from '../../store/auth/authSelectors';
import { logout } from '../../store/auth/authOperations';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  // console.log(token);
  // console.log(isLoggedIn);
  return (
    <section className={styles.header}>
      <div className="container">
        <NavLink
          to="/login"
          exact
          className={styles.loginLink}
          activeClassName={styles.activeLink}
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={styles.registerLink}
          activeClassName={styles.activeLink}
        >
          Register
        </NavLink>
        <NavLink
          to="/contacts"
          className={styles.contactsLink}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
        <NavLink
          onClick={() => dispatch(logout(token))}
          to="/login"
          className={styles.contactsLink}
          activeClassName={styles.activeLink}
        >
          Logout
        </NavLink>
      </div>
    </section>
  );
}
