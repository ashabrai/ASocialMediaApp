import React, { useState, useEffect, FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from 'store/auth/action';
import SignUpForm from 'sharedComponents/AuthForm';
import { selectHasBeenCreated } from 'store/auth/selectors';
import { isValidEmailAddress } from 'utils/helper';
import './SignUp.scss';

interface SignUpProps {
  hasBeenCreated: boolean;
}

const SignUp: FC<SignUpProps> = ({ hasBeenCreated }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const hasBeenCreatedValue: typeof hasBeenCreated = useSelector(selectHasBeenCreated);

  const [name, setName] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [image, setProfileImage] = useState<object>();
  const [emailError, setEmailError] = useState<boolean>(false);

  useEffect(() => {
    if (hasBeenCreatedValue) {
      history.push('/AccountCreated');
    }
  }, [hasBeenCreatedValue, history]);

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

  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const profileImageUrl = event.target.files[0];
    setProfileImage(profileImageUrl)
  }


  const handleSubmitButtonClick = () => {
    dispatch(createUser({ name, username, email, password, image }));
    // here will need to pass profile image
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
        userProfileImage="Profile Image"
        message={linkToLogin}
        emailError={emailError} 
        handleNameChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNameChange(e)}
        handleUsernameChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUsernameChange(e)}
        handleEmailChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e)}
        handlePasswordChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e)}
        handleProfileImageChange={(e: React.ChangeEvent<HTMLInputElement>) => handleProfileImageChange(e)}
        handleClick={() => handleSubmitButtonClick()}
      />
    </div>
  );
};

export default SignUp;
