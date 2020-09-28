import React, { useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeUserPost, unlikeUserPost, commentPost, deleteUserPost } from 'store/user/action';
import { selectedUserId } from 'store/auth/selectors';
import DisplayCard from 'sharedComponents/DisplayCard';
import CommentSection from 'sharedComponents/Comments';
import PopupContent from 'sharedComponents/PopupContent';
import { Button, Label } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

interface PostCardProps {
  image?: string;
  header: string;
  postId: string;
  meta: string;
  description: string;
  userHasLikedPost: any;
  postedBy: { _id: string; username: string };
  comments: Array<{
    comment: string;
    postedBy: { _id: string; username: string };
    _id: string;
  }>;
  likes: Array<{
    _id: string;
  }>;
}

const PostCard: FC<PostCardProps> = ({
  image,
  header,
  postId,
  meta,
  description,
  comments,
  likes,
  postedBy,
  userHasLikedPost,
}) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectedUserId);
  const [comment, setCommentValue] = useState<string>('');

  const likePost = () => {
    const payload = { postId };
    dispatch(likeUserPost(payload));
  };

  const unlikePost = () => {
    const payload = { postId };
    dispatch(unlikeUserPost(payload));
  };

  const deletePost = (postId) => {
    dispatch(deleteUserPost(postId));
  };

  const deletePostButtonContent = () => {
    return <Button content="Delete Post" onClick={() => deletePost(postId)} />;
  };

  const headerButtonContent = () => {
    return (
      <PopupContent
        content={deletePostButtonContent()}
        triggerButton={
          <Button as="div" floated="right" icon>
            <FontAwesomeIcon href="" icon={faEllipsisV} size="sm" />
          </Button>
        }
      />
    );
  };

  const cardContent = () => {
    if (userHasLikedPost) {
      return (
        <Button as="div" labelPosition="right">
          <Button icon>
            <FontAwesomeIcon
              icon={faThumbsDown}
              href=""
              size="lg"
              onClick={() => {
                unlikePost();
              }}
            />
          </Button>
          <Label as="a" basic pointing="left">
            {likes.length}
          </Label>
        </Button>
      );
    } else if (!userHasLikedPost) {
      return (
        <Button as="div" labelPosition="right">
          <Button icon>
            <FontAwesomeIcon
              href=""
              icon={faThumbsUp}
              size="lg"
              onClick={() => {
                likePost();
              }}
            />
          </Button>
          <Label as="a" basic pointing="left">
            {likes.length}
          </Label>
        </Button>
      );
    }
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const commentValue = event.target.value;
    setCommentValue(commentValue);
  };

  const handleCommentButtonClick = () => {
    const payload = { postId, comment };
    dispatch(commentPost(payload));
  };

  const commentSection = () => {
    return <CommentSection comments={comments} />;
  };

  return (
    <DisplayCard
      image={image}
      header={header}
      meta={meta}
      description={description}
      content={cardContent()}
      extraContent={true}
      textAreaOnChange={(event) => handleCommentChange(event)}
      buttonContent="Comment"
      onButtonClick={() => handleCommentButtonClick()}
      additionalCardSection={commentSection()}
      headerContent={userId === postedBy._id ? headerButtonContent() : null}
    />
  );
};

export default PostCard;
