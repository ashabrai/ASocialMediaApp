import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

export default (props: any) => {
  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          {props.header}
        </Header>
        <Segment>
          <Form size="large">
            {props.username ? <Form.Input fluid icon="user" iconPosition="left" placeholder={props.username} /> : null}
            <Form.Input fluid icon="mail" iconPosition="left" placeholder={props.email} />
            <Form.Input fluid icon="lock" iconPosition="left" placeholder={props.password} type="password" />
            <Button color="black" fluid size="large">
              {props.button}
            </Button>
          </Form>
        </Segment>
        {props.message ? <Message>{props.message}</Message> : null}
      </Grid.Column>
    </Grid>
  );
};