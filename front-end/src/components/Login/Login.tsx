/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-restricted-imports */
import * as React from 'react';
// import Card from '../../sharedComponents/SimpleCard';
// import InputField from '../../sharedComponents/InputField';
import './Login.scss';
import LoginForm from '../../sharedComponents/Form';
import { Link } from 'react-router-dom';

interface IAppProps {}

const SignIn: React.FunctionComponent<IAppProps> = () => {
  const linkToSignUp = <Link to="/SignUp"> Don't have an account? Sign up here</Link>;

  return (
    <div className="signInForm">
      <LoginForm header="Login" email="Email" password="Password" button="Login" message={linkToSignUp} />
    </div>
  );
};

export default SignIn;
