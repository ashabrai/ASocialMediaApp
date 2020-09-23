import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { likeUserPost, unlikeUserPost, commentPost, deleteUserPost } from 'store/user/action';
import { selectedPostComments } from 'store/user/selectors';
import DisplayCard from 'sharedComponents/DisplayCard';
import CommentSection from 'sharedComponents/Comments';
import PopupContent from 'sharedComponents/PopupContent';
import { Button, Label } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

interface PropsFromState {
  hasCommented: boolean;
  currentPost: Object;
  selectedComments: Array<Object>;
}

interface PropsFromDispatch {
  likeUserPost: (id: String) => any;
  unlikeUserPost: (id: String) => any;
  commentPost: (id: String, comment: any) => any;
  deleteUserPost: (id: String) => any;
}

interface ComponentProps {
  image: any;
  header: String;
  postedBy: String;
  postId: String;
  meta: String;
  description: String;
  comments: Array<String>;
  likes: Array<String>;
}

type AllProps = PropsFromState & PropsFromDispatch & ComponentProps;

const PostCard: React.FunctionComponent<AllProps> = (props: any) => {
  const {
    likeUserPost,
    unlikeUserPost,
    postId,
    commentPost,
    comments,
    hasCommented,
    image,
    header,
    postedBy,
    meta,
    description,
    likes,
  } = props;

  const [liked, setLike] = useState(false);
  const [comment, setCommentValue] = useState<String>('');

  const likeOrUnlikePost = () => {
    if (liked) {
      setLike(false);
      unlikeUserPost(postId);
    } else {
      setLike(true);
      likeUserPost(postId);
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
    const payload = { postId, comment };
    commentPost(payload);
  };

  const commentSection = () => {
    return <CommentSection comments={comments} hasCommented={hasCommented} postedBy={postedBy} />;
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
const mapStateToProps = ({ user }: ApplicationState) => ({
  hasCommented: user.hasCommented,
  currentPost: user.currentPost,
  selectedComments: selectedPostComments(user),
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    likeUserPost: (id: String) => dispatch(likeUserPost(id)),
    unlikeUserPost: (id: String) => dispatch(unlikeUserPost(id)),
    commentPost: (id: String, comment: any) => dispatch(commentPost(id, comment)),
    deleteUserPost: (id: String) => dispatch(deleteUserPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
