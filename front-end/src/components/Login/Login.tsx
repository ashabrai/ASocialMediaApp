import React, { useState, FC } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from 'store/auth/action';
import './Login.scss';
import LoginForm from 'sharedComponents/AuthForm';
import { isValidEmailAddress } from 'utils/helper';
import { selectIsLoggedIn } from 'store/user/selectors';

interface SignInProps {
  location: {
    pathname: string;
    hash: string;
    key: string;
    search: string;
    state: string;
  };
}

const SignIn: FC<SignInProps> = ({ location }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
    dispatch(userLogin({ email, password }));
  };

  if (isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: location },
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
        handleEmailChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e)}
        handlePasswordChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e)}
        handleClick={() => handleLoginButtonClick()}
      />
    </div>
  );
};

export default SignIn;
