/* eslint-disable no-restricted-imports */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter, useHistory } from 'react-router-dom';
import { ApplicationState } from 'store';
import { saveUserData } from 'store/auth/action';

import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import SignUp from '../src/components/SignUp/SignUp';
import Login from '../src/components/Login/Login';
import UserProfile from '../src/components/UserProfile/UserProfile';
import SignUpRedirect from '../src/components/SignUp/SignupRedirect';
import CreatePost from '../src/components/CreatePost/CreatePost';
import Logout from '../src/components/Logout/Logout';
import './App.css';

interface PropsFromDispatch {
  saveUserData: (user: object) => any;
}

type AllProps = PropsFromDispatch;

const Routing: React.FC<AllProps> = (props) => {
  const { saveUserData } = props;
  const history = useHistory();
  // Added this useEffect here in the case that a user closes browser but does not log out
  // That the user data needed in order to navigate through the app will be pulled from LS if found and stored in the store.
  // Which should not require the user to log back in again.
  // But if no data found in LS, it'll re route the user back to the login screen to make them sign back in.
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      saveUserData(user);
    } else if (!history.location.pathname.startsWith('/reset')) {
      history.push('/Login');
    }
  }, [saveUserData, history]);
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/UserProfile" component={UserProfile} />
      <Route exact path="/AccountCreated" component={SignUpRedirect} />
      <Route exact path="/CreatePost" component={CreatePost} />
      <Route exact path="/Logout" component={Logout} />
    </Switch>
  );
};

const App: React.FC<AllProps> = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing {...props} />
    </BrowserRouter>
  );
};

const mapStateToProps = ({ auth }: ApplicationState) => ({
  userDataSaved: auth.userDataSaved,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    saveUserData: (user: object) => {
      dispatch(saveUserData(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
