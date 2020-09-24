import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Input } from 'semantic-ui-react';

interface PropsForAuthForm {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  message?: any;
  header?: string;
  button?: string;
  emailError?: boolean;
  handleNameChange?: (e) => void;
  handleUsernameChange?: (e) => void;
  handleEmailChange: (e) => void;
  handlePasswordChange: (e) => void;
  handleClick: () => void;
}

export default ({
  name,
  username,
  email,
  password,
  message,
  header,
  button,
  emailError,
  handleNameChange,
  handleUsernameChange,
  handleEmailChange,
  handlePasswordChange,
  handleClick,
}: PropsForAuthForm) => {
  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          {header}
        </Header>
        <Segment>
          <Form size="large">
            <Form.Field>
              {name ? (
                <Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  name="name"
                  required={true}
                  placeholder={name}
                  onChange={(e) => handleNameChange(e)}
                />
              ) : null}
              {username ? (
                <Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  required={true}
                  name="username"
                  placeholder={username}
                  onChange={(e) => handleUsernameChange(e)}
                />
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
                onChange={(e) => handlePasswordChange(e)}
              />
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
