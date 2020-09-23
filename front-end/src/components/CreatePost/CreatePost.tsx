import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPost } from 'store/user/action';
import CreatePostForm from 'sharedComponents/CreatePostForm';
import './CreatePost.scss';

interface CreatePostProps {
  createdNewPost: boolean;
}

const CreatePost: React.FC<CreatePostProps> = ({ createdNewPost }: CreatePostProps) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [image, setImage] = useState<object>({});

  useEffect(() => {
    if (createdNewPost) {
      history.push('/');
    }
  }, [createdNewPost, history]);

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
    dispatch(createPost({ title, body, image }));
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

export default CreatePost;
