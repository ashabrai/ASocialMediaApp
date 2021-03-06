import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from 'store/auth/action';
import { fetchUserPosts } from 'store/user/action';

import { selectIsLoggedIn } from 'store/auth/selectors';
import SocialMediaApp from 'assets/socialMediaApp.png';
import Button from 'sharedComponents/ButtonComponent';
import './Navbar.scss';

interface NavbarProps {
  isLoggedIn?: boolean;
}

const Navbar: FC<NavbarProps> = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const isLoggedInValue: typeof isLoggedIn = useSelector(selectIsLoggedIn);

  const logUserOut = () => {
    dispatch(userLogout());
  };

  const fetchUserSignedInPosts = () => {
    dispatch(fetchUserPosts());
  };

  const renderProperLinks = () => {
    if (isLoggedInValue) {
      return [
        <Link to="/" key="home">
          <Button title="Home" color="grey" />
        </Link>,
        <Link to="/UserProfile" key="profile">
          <Button title="Profile" color="grey" onClick={() => fetchUserSignedInPosts()} />
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
