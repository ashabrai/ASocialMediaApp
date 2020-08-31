import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Input } from 'semantic-ui-react';

export default (props: any) => {
  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          {props.header}
        </Header>
        <Segment>
          <Form size="large">
            <Form.Field>
              {props.name ? (
                <Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  name="name"
                  required="true"
                  placeholder={props.name}
                  onChange={(e) => props.handleNameChange(e)}
                />
              ) : null}
              {props.username ? (
                <Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  required="true"
                  name="username"
                  placeholder={props.username}
                  onChange={(e) => props.handleUsernameChange(e)}
                />
              ) : null}
              <Input
                fluid
                icon="mail"
                iconPosition="left"
                required="true"
                placeholder={props.email}
                onChange={(e) => props.handleEmailChange(e)}
              />
              <Input
                fluid
                icon="lock"
                iconPosition="left"
                required="true"
                placeholder={props.password}
                onChange={(e) => props.handlePasswordChange(e)}
                type="password"
              />
            </Form.Field>

            <Button color="black" fluid size="large" onClick={() => props.handleClick()}>
              {props.button}
            </Button>
          </Form>
        </Segment>
        {props.message ? <Message>{props.message}</Message> : null}
      </Grid.Column>
    </Grid>
  );
};
