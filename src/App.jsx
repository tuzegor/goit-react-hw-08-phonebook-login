import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/Login';
import Header from './components/Header/Header';
import Register from './views/Register';
import Contacts from './views/Contacts';

export default function App() {
  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contacts" component={Contacts} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}
