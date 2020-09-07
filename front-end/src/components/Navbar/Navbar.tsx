/* eslint-disable no-restricted-imports */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ApplicationState } from '../../store/index';
import { userLogout } from 'store/auth/action';
import { connect } from 'react-redux';
import SocialMediaApp from '../../assets/socialMediaApp.png';
import Button from '../../sharedComponents/ButtonComponent';
import './Navbar.scss';

interface PropsFromState {
  errors: String;
  isLoggedIn: boolean;
  isLoggedOut: boolean;
}

interface PropsFromDispatch {
  userLogout: () => any;
}
type AllProps = PropsFromDispatch & PropsFromState;

const Navbar: React.FunctionComponent<AllProps> = (props) => {
  const { userLogout, isLoggedIn } = props;

  const logUserOut = () => {
    userLogout();
  };

  const renderProperLinks = () => {
    if (isLoggedIn) {
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
        <Link to="/Logout" key="logout">
          <Button title="Logout" color="grey" onClick={() => logUserOut()} />
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
  isLoggedOut: auth.isLoggedOut,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    userLogout: () => dispatch(userLogout()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
