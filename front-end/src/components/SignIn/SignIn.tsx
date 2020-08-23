/* eslint-disable no-restricted-imports */
import * as React from 'react';
// import Card from '../../sharedComponents/SimpleCard';
// import InputField from '../../sharedComponents/InputField';
import './SignIn.scss';
import LoginForm from '../../sharedComponents/Form';

interface IAppProps {}

const SignIn: React.FunctionComponent<IAppProps> = () => {
  return (
    <div className="signInForm">
      <LoginForm header="Login" email="Email" password="Password" button="Login" />
    </div>
  );
};

export default SignIn;
