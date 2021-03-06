import React, { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter, useHistory } from 'react-router-dom';
import { saveUserData } from 'store/auth/action';

import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import SignUp from 'components/SignUp/SignUp';
import Login from 'components/Login/Login';
import UserProfile from 'components/UserProfile/UserProfile';
import SignUpRedirect from 'components/SignUp/SignupRedirect';
import CreatePost from 'components/CreatePost/CreatePost';
import Logout from 'components/Logout/Logout';
import UserProfileById from 'components/UserProfileById/UserProfileById';
import './App.css';

const Routing: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // Added this useEffect here in the case that a user closes browser but does not log out
  // That the user data needed in order to navigate through the app will be pulled from LS if found and stored in the store.
  // Which should not require the user to log back in again.
  // But if no data found in LS, it'll re route the user back to the login screen to make them sign back in.
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(saveUserData(user));
    } else if (!history.location.pathname.startsWith('/reset')) {
      history.push('/Login');
    }
  }, [dispatch, history]);
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/UserProfile" component={UserProfile} />
      <Route exact path="/AccountCreated" component={SignUpRedirect} />
      <Route exact path="/CreatePost" component={CreatePost} />
      <Route exact path="/Logout" component={Logout} />
      <Route exact path="/Profile/:userId" component={UserProfileById} />
    </Switch>
  );
};

const App: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
