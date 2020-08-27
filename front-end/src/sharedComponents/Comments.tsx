/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { Comment, Header } from 'semantic-ui-react';

interface iAppProps {
  userName?: String;
  datePublished?: String;
  comment?: String;
}

const CommentSection: React.FC<iAppProps> = ({ userName, datePublished, comment }) => {
  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Comments
      </Header>
      <Comment>
        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
        <Comment.Content>
          <Comment.Author as="a">{userName}</Comment.Author>
          <Comment.Metadata>
            <div>{datePublished}</div>
          </Comment.Metadata>
          <Comment.Text>{comment}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  );
};

export default CommentSection;
