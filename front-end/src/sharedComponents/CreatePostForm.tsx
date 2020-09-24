import React from 'react';
import { Button, Form, Card } from 'semantic-ui-react';
interface PropsForCreatePostForm {
  handleTitleChange: (e) => void;
  handleImageChange: (e) => void;
  handleBodyChange: (e) => void;
  handleClick: Function;
  title: string;
}

const CreatePostForm = ({
  handleTitleChange,
  handleImageChange,
  handleBodyChange,
  handleClick,
  title,
}: PropsForCreatePostForm) => {
  return (
    <Card style={{ width: '40vw', padding: '10px' }}>
      <Form>
        <Form.Field>
          <label>{title}</label>
          <input
            placeholder="title"
            onChange={(e) => {
              handleTitleChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="file"
            onChange={(e) => {
              handleImageChange(e);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Write a caption</label>
          <input
            placeholder="caption"
            onChange={(e) => {
              handleBodyChange(e);
            }}
          />
        </Form.Field>
        <Button
          color="black"
          fluid
          size="small"
          onClick={() => {
            handleClick();
          }}
        >
          Upload Photo
        </Button>
      </Form>
    </Card>
  );
};

export default CreatePostForm;
