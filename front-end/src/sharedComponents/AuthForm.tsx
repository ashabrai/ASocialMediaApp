import React, { FC } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Input, Label } from 'semantic-ui-react';

interface PropsForAuthForm {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  userProfileImage?: string;
  message?: any;
  header?: string;
  button?: string;
  emailError?: boolean;
  handleNameChange?: (e) => void;
  handleUsernameChange?: (e) => void;
  handleEmailChange: (e) => void;
  handlePasswordChange: (e) => void;
  handleProfileImageChange?: (e) => void;
  handleClick: () => void;
}

const AuthForm: FC<PropsForAuthForm> = ({
  name,
  username,
  email,
  password,
  userProfileImage,
  message,
  header,
  button,
  emailError,
  handleNameChange,
  handleUsernameChange,
  handleEmailChange,
  handlePasswordChange,
  handleProfileImageChange,
  handleClick,
}) => {
  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          {header}
        </Header>
        <Segment>
          <Form size="large">
            <Form.Field>
              {name && username ? (
                <>
                <Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  name="name"
                  required={true}
                  placeholder={name}
                  onChange={(e) => handleNameChange(e)}
                />
                <Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  required={true}
                  name="username"
                  placeholder={username}
                  onChange={(e) => handleUsernameChange(e)}
                />
                </>
              ) : null}
              <Input 
                type="mail"
                fluid
                icon="mail"
                iconPosition="left"
                required={true}
                placeholder={email}
                error={emailError}
                onChange={(e) => handleEmailChange(e)}
              />
              <Input
                fluid
                icon="lock"
                iconPosition="left"
                required={true}
                placeholder={password}
                type="password"
                onChange={(e) => handlePasswordChange(e)}
              />
            {userProfileImage ? (
            <Segment>
              <Label attached="top">Select A Profile Image</Label>
              <Input
                fluid
                type="file"
                placeholder={userProfileImage}
                onChange={(e) => {handleProfileImageChange(e)}}
              />
              </Segment>
              ): null}
            </Form.Field>

            <Button color="black" fluid size="large" onClick={() => handleClick()}>
              {button}
            </Button>
          </Form>
        </Segment>
        {message ? <Message>{message}</Message> : null}
      </Grid.Column>
    </Grid>
  );
};
export default AuthForm;
