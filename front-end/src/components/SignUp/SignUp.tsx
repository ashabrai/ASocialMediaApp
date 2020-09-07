/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-imports */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/index';
import { createUser } from '../../store/auth/action';
import SignUpForm from '../../sharedComponents/AuthForm';
import { isValidEmailAddress } from '../../utils/helper';
import './SignUp.scss';

interface PropsFromState {
  hasBeenCreated: boolean;
}
interface PropsFromDispatch {
  createUser: (name: String, username: String, email: String, password: String) => String;
}

type AllProps = PropsFromDispatch & PropsFromState;

const SignUp: React.FC<AllProps> = (props: any) => {
  const { createUser, hasBeenCreated } = props;
  const history = useHistory();
  const [name, setName] = useState<String>();
  const [username, setUsername] = useState<String>();
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();
  const [emailError, setEmailError] = useState<boolean>(false);

  const handleSubmitButtonClick = () => {
    createUser({ name, username, email, password });
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

const mapStateToProps = ({ auth }: ApplicationState) => ({
  hasBeenCreated: auth.hasBeenCreated,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    createUser: (data: { name: String; username: String; email: String; password: String }) => {
      dispatch(createUser(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
