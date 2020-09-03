/* eslint-disable no-restricted-imports */
import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaApp from '../../assets/socialMediaApp.png';
import './Navbar.scss';
import Button from '../../sharedComponents/ButtonComponent';

const App: React.FunctionComponent = () => {
  return (
    <div className="nav">
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
          <Link to="/CreatePost">
            <Button title="Create Post" color="grey" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
