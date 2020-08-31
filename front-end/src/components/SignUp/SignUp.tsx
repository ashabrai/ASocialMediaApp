/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-imports */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../../store/auth/action';
import './SignUp.scss';
import SignUpForm from '../../sharedComponents/Form';

interface FormProps {
  name: String;
  username: String;
  email: String;
  password: String;
}

interface PropsFromDispatch {
  createUser: (name: any, username: any, email: any, password: any) => any;
}

type AllProps = FormProps & PropsFromDispatch;

const SignUp: React.FC<AllProps> = (props: any) => {
  const [name, setName] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmitButtonClick = () => {
    props.createUser({ name, username, email, password });
  };
  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
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
        handleNameChange={(e: any) => handleNameChange(e)}
        handleUsernameChange={(e: any) => handleUsernameChange(e)}
        handleEmailChange={(e: any) => handleEmailChange(e)}
        handlePasswordChange={(e: any) => handlePasswordChange(e)}
        handleClick={() => handleSubmitButtonClick()}
      />
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: any) => {
  return {
    createUser: (data: { name: any; username: any; email: any; password: any }) => {
      dispatch(createUser(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
