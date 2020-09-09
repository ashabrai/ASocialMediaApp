/* eslint-disable no-restricted-imports */
import React, { useState } from 'react';
import { Card, Image, Form, Button } from 'semantic-ui-react';
import CommentSection from '../sharedComponents/Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faComment, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const DisplayCard = (props: any) => {
  // console.log(props);
  const { likeUsersPost, unlikeUsersPost, postId } = props;
  const [isClicked, setClicked] = useState(false);
  const [liked, setLike] = useState(false);

  const buttonClicked = () => {
    setClicked(!isClicked);
  };

  const likeOrUnlikePost = () => {
    if (liked) {
      setLike(false);
      unlikeUsersPost(postId);
    } else {
      setLike(true);
      likeUsersPost(postId);
    }
  };

  return (
    <Card style={{ width: '40vw' }}>
      {props.image ? <Image src={props.image} wrapped ui={false} /> : null}
      <Card.Content>
        {props.content ? (
          props.content
        ) : (
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
            {/* <a> */}
            <FontAwesomeIcon
              icon={faComment}
              size="lg"
              onClick={buttonClicked}
              style={{ marginLeft: '5px', marginBottom: '10px' }}
            />
            {/* </a> */}
          </div>
        )}
        {props.header ? <Card.Header>{props.header}</Card.Header> : null}
        {props.meta ? (
          <Card.Meta>
            <span>{props.meta}</span>
          </Card.Meta>
        ) : null}
        {props.description ? <Card.Description>{props.description}</Card.Description> : null}
      </Card.Content>
      {props.extraContent ? (
        <Card.Content extra>
          <Form reply>
            <Form.TextArea />
            <Button color="black" fluid size="small">
              {props.buttonContent}
            </Button>
          </Form>
          {isClicked ? <CommentSection /> : null}
        </Card.Content>
      ) : null}
    </Card>
  );
};
export default DisplayCard;
