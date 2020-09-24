import React from 'react';
import { Link } from 'react-router-dom';
import { userLogout } from 'store/auth/action';
import { useDispatch, useSelector } from 'react-redux';
import SocialMediaApp from 'assets/socialMediaApp.png';
import Button from 'sharedComponents/ButtonComponent';
import './Navbar.scss';
import { selectIsLoggedIn } from 'store/user/selectors';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const logUserOut = () => {
    dispatch(userLogout());
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

export default Navbar;
