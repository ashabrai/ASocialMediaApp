/* eslint-disable no-restricted-imports */
import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import SocialMediaApp from '../../assets/socialMediaApp.png';
import './Navbar.scss';
import Button from '../../sharedComponents/ButtonComponent';
import Homepage from '../Homepage/Homepage';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import UserProfile from '../UserProfile/UserProfile';
import SignupRedirect from '../SignUp/SignupRedirect';
import CreatePost from '../CreatePost/CreatePost';

const App: React.FunctionComponent = () => {
  return (
    <div className="nav">
      <BrowserRouter>
        <div className="nav__header">
          <img className="nav__headerImage" src={SocialMediaApp} alt="social media app logo" />
          <div className="nav__links">
            <Link to="/">
              <Button title="Home" color="grey" />
            </Link>
            <Link to="/SignUp">
              <Button title="Sign Up" color="grey" />
            </Link>
            <Link to="/Login">
              <Button title="Login" color="grey" />
            </Link>
            <Link to="/UserProfile">
              <Button title="Profile" color="grey" />
            </Link>
          </div>
        </div>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/UserProfile" component={UserProfile} />
          <Route exact path="/AccountCreated" component={SignupRedirect} />
          <Route exact path="/CreatePost" component={CreatePost} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
