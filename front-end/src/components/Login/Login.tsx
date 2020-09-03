/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-restricted-imports */
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { userLogin } from 'store/auth/action';
import { connect } from 'react-redux';
import './Login.scss';
import LoginForm from '../../sharedComponents/AuthForm';
import { isValidEmailAddress } from '../../utils/helper';
import { ApplicationState } from 'store';

interface PropsFromState {
  isLoggedIn: boolean;
}

interface PropsFromDispatch {
  userLogin: (email: string, password: string) => string;
}

type AllProps = PropsFromState & PropsFromDispatch;

const SignIn: React.FunctionComponent<AllProps> = (props: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    // TODO: Create a helper function to verify password has proper length and no weird characters
    setPassword(password);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    const verifyEmail = isValidEmailAddress(email);

    if (verifyEmail) {
      setEmailError(false);
      setEmail(email);
    } else if (email === '') {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleLoginButtonClick = () => {
    props.userLogin({ email, password });
  };

  if (props.isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location },
        }}
      />
    );
  }
  const linkToSignUp = <Link to="/SignUp"> Don't have an account? Sign up here</Link>;

  return (
    <div className="signInForm">
      <LoginForm
        header="Login"
        email="Email"
        password="Password"
        button="Login"
        message={linkToSignUp}
        emailError={emailError}
        handleEmailChange={(e: any) => handleEmailChange(e)}
        handlePasswordChange={(e: any) => handlePasswordChange(e)}
        handleClick={() => handleLoginButtonClick()}
      />
    </div>
  );
};

const mapStateToProps = ({ auth }: ApplicationState) => ({
  isLoggedIn: auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    userLogin: (data: { email: string; password: string }) => {
      dispatch(userLogin(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
