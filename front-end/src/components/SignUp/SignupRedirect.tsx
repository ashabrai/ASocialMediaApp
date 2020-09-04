/* eslint-disable no-restricted-imports */
import * as React from 'react';
import DisplayCard from '../../sharedComponents/DisplayCard';
import Button from '../../sharedComponents/ButtonComponent';
import Login from '../Login/Login';
import { Link, Route } from 'react-router-dom';
import './SignupRedirect.scss';

const SignupRedirect: React.FunctionComponent = () => {
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

export default SignupRedirect;
