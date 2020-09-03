import React from 'react';
import { Button, Form, Card } from 'semantic-ui-react';

const CreatePostForm = (props: any) => {
  return (
    <Card style={{ width: '40vw', padding: '10px' }}>
      <Form>
        <Form.Field>
          <label>{props.title}</label>
          <input
            placeholder="title"
            onChange={(e) => {
              props.handleTitleChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="file"
            onChange={(e) => {
              props.handleImageChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Write a caption</label>
          <input
            placeholder="caption"
            onChange={(e) => {
              props.handleBodyChange(e);
            }}
          />
        </Form.Field>
        <Button
          color="black"
          fluid
          size="small"
          onClick={() => {
            props.handleClick();
          }}
        >
          Upload Photo
        </Button>
      </Form>
    </Card>
  );
};

export default CreatePostForm;
