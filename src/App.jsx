import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/Login';
import Header from './components/Header/Header';
import Register from './views/Register';
import Contacts from './views/Contacts';
import { authSelectors } from './store/auth/authSelectors';

export default function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log('isLoggedIn: ', isLoggedIn);
  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Route exact path="/login">
          {isLoggedIn ? <Redirect to="/contacts" /> : <Login />}
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/contacts">
          {!isLoggedIn ? <Redirect to="/login" /> : <Contacts />}
        </Route>

        <Redirect to="/login" />
      </Switch>
      {/* {isLoggedIn ? <Redirect to="/contacts" /> : <Redirect to="/login" />} */}
    </div>
  );
}
