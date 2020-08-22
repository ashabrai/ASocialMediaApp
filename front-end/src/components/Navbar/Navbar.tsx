/* eslint-disable no-restricted-imports */
import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import SocialMediaApp from '../../assets/socialMediaApp.png';
import './Navbar.scss';
import Button from '../../sharedComponents/ButtonComponent';
import Homepage from '../Homepage/Homepage';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

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
            <Link to="/SignIn">
              <Button title="Sign In" color="grey" />
            </Link>
          </div>
        </div>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
