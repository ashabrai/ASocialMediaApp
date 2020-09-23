import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { userLogin } from 'store/auth/action';
import { connect } from 'react-redux';
import './Login.scss';
import LoginForm from 'sharedComponents/AuthForm';
import { isValidEmailAddress } from 'utils/helper';
import { ApplicationState } from 'store';

interface PropsFromState {
  isLoggedIn: boolean;
}

interface PropsFromDispatch {
  userLogin: (email: String, password: String) => String;
}

type AllProps = PropsFromState & PropsFromDispatch;

const SignIn: React.FC<AllProps> = (props: any) => {
  const { userLogin, isLoggedIn } = props;
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
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
    userLogin({ email, password });
  };

  if (isLoggedIn) {
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
    userLogin: (data: { email: String; password: String }) => {
      dispatch(userLogin(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
