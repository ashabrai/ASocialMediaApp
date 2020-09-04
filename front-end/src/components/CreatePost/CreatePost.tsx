/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../store/user/action';
import CreatePostForm from '../../sharedComponents/CreatePostForm';
import { ApplicationState } from '../../store/index';
import './CreatePost.scss';

interface PropsFromState {
  errors: String;
  createdNewPost: boolean;
}

interface PropsFromDispatch {
  createPost: (title: String, body: String, image: object) => any;
}
type AllProps = PropsFromState & PropsFromDispatch;

const CreatePost: React.FC<AllProps> = (props: any) => {
  const history = useHistory();
  const [title, setTitle] = useState<String>('');
  const [body, setBody] = useState<String>('');
  const [image, setImage] = useState<object>({});

  useEffect(() => {
    if (props.createdNewPost) {
      history.push('/');
    }
  }, [props.createdNewPost, history]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value;
    setTitle(title);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const body = event.target.value;
    setBody(body);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files[0];
    setImage(image);
  };

  const handleClick = () => {
    props.createPost({ title, body, image });
  };

  return (
    <div className="createPostForm">
      <CreatePostForm
        title="Create a New Post"
        handleTitleChange={(e) => handleTitleChange(e)}
        handleBodyChange={(e) => handleBodyChange(e)}
        handleImageChange={(e) => handleImageChange(e)}
        handleClick={() => handleClick()}
      />
    </div>
  );
};

const mapStateToProps = ({ user }: ApplicationState) => ({
  createdNewPost: user.createdNewPost,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    createPost: (data: { title: String; body: String; image: any }) => {
      dispatch(createPost(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
