/* eslint-disable no-restricted-imports */
import React, { useState } from 'react';
import { Card, Image, Form, Button } from 'semantic-ui-react';
import CommentSection from '../sharedComponents/Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const DisplayCard = (props: any) => {
  const [isClicked, setClicked] = useState(false);

  const buttonClicked = () => {
    setClicked(!isClicked);
  };

  return (
    <Card style={{ width: '40vw' }}>
      {props.image ? <Image src={props.image} wrapped ui={false} /> : null}
      <Card.Content>
        {props.content ? (
          props.content
        ) : (
          <div>
            <a>
              <FontAwesomeIcon
                icon={faHeart}
                size="lg"
                onClick={() => {}}
                style={{ marginLeft: '5px', marginBottom: '10px' }}
              />
            </a>
            <a>
              <FontAwesomeIcon
                icon={faComment}
                size="lg"
                onClick={buttonClicked}
                style={{ marginLeft: '5px', marginBottom: '10px' }}
              />
            </a>
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
