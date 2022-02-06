import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/Login';
import Header from './components/Header/Header';
import Register from './views/Register';
import Contacts from './views/Contacts';
import { authSelectors, getToken } from './store/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { currentUser } from './store/auth/authOperations';

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const token = useSelector(getToken);
  console.log('isLoggedIn: ', isLoggedIn);
  console.log(token);
  useEffect(() => {
    if (token) {
      dispatch(currentUser(token));
    }
  }, []);

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
