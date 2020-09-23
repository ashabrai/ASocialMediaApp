import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from 'store/auth/action';
import SignUpForm from 'sharedComponents/AuthForm';
import { isValidEmailAddress } from 'utils/helper';
import './SignUp.scss';
import { selectHasBeenCreated } from 'store/user/selectors';

interface SignUpProps {
  hasBeenCreated: boolean;
}

const SignUp: React.FC<SignUpProps> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const hasBeenCreated = useSelector(selectHasBeenCreated);

  const [name, setName] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [emailError, setEmailError] = useState<boolean>(false);

  const handleSubmitButtonClick = () => {
    dispatch(createUser({ name, username, email, password }));
    if (hasBeenCreated) {
      history.push('/AccountCreated');
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value;
    // TODO: Create a helper function that verifies that username has not been taking
    setUsername(username);
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

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    // TODO: Create a helper function to verify password has proper length and no weird characters
    setPassword(password);
  };

  const linkToLogin = <Link to="/Login">Have an account? Login in here </Link>;

  return (
    <div className="signUpForm">
      <SignUpForm
        header="Sign Up"
        name="Name"
        username="Username"
        email="Email"
        password="Password"
        button="Sign Up"
        message={linkToLogin}
        emailError={emailError}
        handleNameChange={(e: any) => handleNameChange(e)}
        handleUsernameChange={(e: any) => handleUsernameChange(e)}
        handleEmailChange={(e: any) => handleEmailChange(e)}
        handlePasswordChange={(e: any) => handlePasswordChange(e)}
        handleClick={() => handleSubmitButtonClick()}
      />
    </div>
  );
};

export default SignUp;
