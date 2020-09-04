/* eslint-disable no-restricted-imports */
import React from 'react';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../../store/index';
import { connect } from 'react-redux';
import SocialMediaApp from '../../assets/socialMediaApp.png';
import './Navbar.scss';
import Button from '../../sharedComponents/ButtonComponent';

interface PropsFromState {
  errors: String;
  isLoggedIn: boolean;
}

type AllProps = PropsFromState;

const Navbar: React.FunctionComponent<AllProps> = (props) => {
  const renderProperLinks = () => {
    if (props.isLoggedIn) {
      return [
        <Link to="/" key="home">
          <Button title="Home" color="grey" />
        </Link>,
        <Link to="/UserProfile" key="profile">
          <Button title="Profile" color="grey" />
        </Link>,
        <Link to="/CreatePost" key="createPost">
          <Button title="Create Post" color="grey" />
        </Link>,
      ];
    } else {
      return [
        <Link to="/SignUp" key="signUp">
          <Button title="Sign Up" color="grey" />
        </Link>,
        <Link to="/Login" key="login">
          <Button title="Login" color="grey" />
        </Link>,
      ];
    }
  };

  return (
    <div className="nav">
      <div className="nav__header">
        <img className="nav__headerImage" src={SocialMediaApp} alt="social media app logo" />
        <div className="nav__links">{renderProperLinks()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }: ApplicationState) => ({
  isLoggedIn: auth.isLoggedIn,
});

export default connect(mapStateToProps, null)(Navbar);
