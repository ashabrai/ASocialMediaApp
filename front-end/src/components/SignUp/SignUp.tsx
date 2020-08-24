/* eslint-disable no-restricted-imports */
import * as React from 'react';
import './SignUp.scss';
import SignUpForm from '../../sharedComponents/Form';
import { Link } from 'react-router-dom';

interface IAppProps {}

const SignUp: React.FunctionComponent<IAppProps> = () => {
  const linkToLogin = <Link to="/Login">Have an account? Login in here </Link>;

  return (
    <div className="signUpForm">
      <SignUpForm
        header="Sign Up"
        username="Username"
        email="Email"
        password="Password"
        button="Sign Up"
        message={linkToLogin}
      />
    </div>
  );
};

export default SignUp;
