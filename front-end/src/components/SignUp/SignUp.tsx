/* eslint-disable no-restricted-imports */
import * as React from 'react';
import './SignUp.scss';
import SignUpForm from '../../sharedComponents/Form';

interface IAppProps {}

const SignUp: React.FunctionComponent<IAppProps> = () => {
  return (
    <div className="signUpForm">
      <SignUpForm header="Sign Up" username="Username" email="Email" password="Password" button="Sign Up" />
    </div>
  );
};

export default SignUp;
