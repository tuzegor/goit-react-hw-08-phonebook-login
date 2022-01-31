import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
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
      </div>
    </section>
  );
}
