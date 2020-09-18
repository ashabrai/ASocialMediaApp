/* eslint-disable no-restricted-imports */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { selectedPostComments } from '../../store/user/selectors';
import DisplayCard from '../../sharedComponents/DisplayCard';
import CommentSection from '../../sharedComponents/Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { likeUserPost, unlikeUserPost, commentPost } from 'store/user/action';

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
}

interface ComponentProps {
  image: any;
  header: String;
  postedBy: String;
  postId: String;
  meta: String;
  description: String;
  comments: Array<String>;
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

  const cardContent = () => {
    return (
      <div>
        {!liked ? (
          <FontAwesomeIcon
            href=""
            icon={faThumbsUp}
            size="lg"
            onClick={() => {
              likeOrUnlikePost();
            }}
            style={{ marginLeft: '5px', marginBottom: '10px' }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faThumbsDown}
            href=""
            size="lg"
            onClick={() => {
              likeOrUnlikePost();
            }}
            style={{ marginLeft: '5px', marginBottom: '10px' }}
          />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
