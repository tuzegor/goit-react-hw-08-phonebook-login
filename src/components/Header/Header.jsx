import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useDispatch } from 'react-redux';
import { authSelectors, getToken } from '../../store/auth/authSelectors';
import { logout } from '../../store/auth/authOperations';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  return (
    <section className={styles.header}>
      <div className="container">
        {!isLoggedIn && (
          <>
            <NavLink
              to="/login"
              exact
              className={`Btn ${styles.Btn}`}
              activeClassName="activeBtn"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={`Btn ${styles.Btn}`}
              activeClassName="activeBtn"
            >
              Register
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <>
            <span>Hello, {userName} </span>
            <NavLink
              onClick={() => dispatch(logout(token))}
              to="/login"
              className={`Btn ${styles.Btn}`}
            >
              Logout
            </NavLink>
          </>
        )}
      </div>
    </section>
  );
}
