import React, { FC } from 'react';
import DisplayCard from 'sharedComponents/DisplayCard';
import Button from 'sharedComponents/ButtonComponent';
import Login from 'components/Login/Login';
import { Link, Route } from 'react-router-dom';
import './SignUpRedirect.scss';

const SignUpRedirect: FC = () => {
  const routeToLogin = () => {
    return (
      <div className="signUpRedirect__button">
        <Link to="/Login">
          <Button color="black" title="Go to login page" />
        </Link>
      </div>
    );
  };

  return (
    <div className="signUpRedirect">
      <DisplayCard content="You've successfully signed up, please log in here" description={routeToLogin()} />
      <Route exact path="/Login" component={Login} />
    </div>
  );
};

export default SignUpRedirect;
