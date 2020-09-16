/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { Comment, Header } from 'semantic-ui-react';

interface iAppProps {
  username?: String;
  datePublished?: String;
  comments: Array<String>;
}

const CommentSection: React.FC<iAppProps> = (props: any) => {
  const { comments } = props;
  console.log(props);
  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Comments
      </Header>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
            <Comment.Content>
              <Comment.Author as="a">{comment.postedBy}</Comment.Author>
              {/* <Comment.Metadata>
                {/* <div>{comment.datePublished}</div> */}
              {/* </Comment.Metadata> */}
              <Comment.Text>{comment.comment}</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </div>
      ))}
    </Comment.Group>
  );
};

export default CommentSection;
