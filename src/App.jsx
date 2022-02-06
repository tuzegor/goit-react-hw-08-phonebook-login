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
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contacts">
          {isLoggedIn ? <Contacts /> : <Redirect to="/login" />}
        </Route>

        <Redirect to="/login" />
      </Switch>
    </div>
  );
}
