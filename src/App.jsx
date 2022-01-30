import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Contacts from './views/Contacts';
import Login from './views/Login';
import Register from './views/Register';
export default function App() {
  return (
    <div className="App">
      <Contacts />
      {/* <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contacts" component={Contacts} />
        <Redirect to="/login" />
      </Switch> */}
    </div>
  );
}
