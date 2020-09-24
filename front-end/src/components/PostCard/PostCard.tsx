import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeUserPost, unlikeUserPost, commentPost, deleteUserPost } from 'store/user/action';
import { selectHasCommented } from 'store/user/selectors';
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
  postedBy: string;
  postId: string;
  meta: string;
  description: string;
  comments: Array<{
    comment: string;
    postedBy: { _id: string; username: string };
    _id: string;
  }>;
  likes: Array<string>;
}

const PostCard: React.FC<PostCardProps> = ({
  image,
  header,
  postedBy,
  postId,
  meta,
  description,
  comments,
  likes,
}: PostCardProps) => {
  const dispatch = useDispatch();
  const hasCommented = useSelector(selectHasCommented);
  const [liked, setLike] = useState(false);
  const [comment, setCommentValue] = useState<string>('');

  const likeOrUnlikePost = () => {
    if (liked) {
      setLike(false);
      dispatch(unlikeUserPost(postId));
    } else {
      setLike(true);
      dispatch(likeUserPost(postId));
    }
  };

  const deletePost = () => {};

  const deletePostButtonContent = () => {
    return <Button content="Delete Post" onClick={() => {}} />;
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
    return (
      <div>
        {likes.length === 0 ? (
          <Button as="div" labelPosition="right">
            <Button icon>
              <FontAwesomeIcon
                href=""
                icon={faThumbsUp}
                size="lg"
                onClick={() => {
                  likeOrUnlikePost();
                }}
              />
            </Button>
            <Label as="a" basic pointing="left">
              {likes.length}
            </Label>
          </Button>
        ) : (
          <Button as="div" labelPosition="right">
            <Button icon>
              <FontAwesomeIcon
                icon={faThumbsDown}
                href=""
                size="lg"
                onClick={() => {
                  likeOrUnlikePost();
                }}
              />
            </Button>
            <Label as="a" basic pointing="left">
              {likes.length}
            </Label>
          </Button>
        )}
      </div>
    );
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const commentValue = event.target.value;
    setCommentValue(commentValue);
  };

  const handleCommentButtonClick = () => {
    dispatch(commentPost(postId, comment));
  };

  const commentSection = () => {
    return <CommentSection comments={comments} hasCommented={hasCommented} />;
  };

  return (
    <DisplayCard
      image={image}
      header={header}
      postedBy={postedBy}
      postId={postId}
      meta={meta}
      description={description}
      content={cardContent()}
      extraContent={true}
      textAreaOnChange={(event) => handleCommentChange(event)}
      buttonContent="Comment"
      onButtonClick={() => handleCommentButtonClick()}
      displayExtraContent={hasCommented}
      additionalCardSection={commentSection()}
      hasCommented={hasCommented}
      headerContent={headerButtonContent()}
    />
  );
};

export default PostCard;
