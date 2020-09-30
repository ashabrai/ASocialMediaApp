import React, { useState, FC } from 'react';
import { Comment, Header, Checkbox } from 'semantic-ui-react';

interface CommentsProps {
  comments: Array<{
    comment: string;
    postedBy: string;
    _id: string;
  }>;
}

const CommentSection: FC<CommentsProps> = ({ comments }) => {
  const [isChecked, setChecked] = useState<boolean>(true);
  const onChange = () => {
    setChecked(!isChecked);
  };
  const commentsHeader = () => {
    return !isChecked ? 'Collapse All Comments' : `View ${comments.length} Comments`;
  };

  return (
    <div>
      {comments.length !== 0 ? <Checkbox defaultChecked label={commentsHeader()} onChange={() => onChange()} /> : null}
      <Comment.Group collapsed={isChecked}>
        <Header as="h3">Comments</Header>
        {comments.map((comment, index) => (
          <div key={index}>
            <Comment>
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
              <Comment.Content>
                <Comment.Author as="a">{comment.postedBy}</Comment.Author>
                {/* <Comment.Metadata>
                  <div>{comment.datePublished}</div>
                </Comment.Metadata> */}
                <Comment.Text>{comment.comment}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </div>
        ))}
      </Comment.Group>
    </div>
  );
};

export default CommentSection;
