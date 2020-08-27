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
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
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
        <Card.Header>{props.userName}</Card.Header>
        <Card.Meta>
          <span className="date">{props.datePublished}</span>
        </Card.Meta>
        <Card.Description>{props.postDescription}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Form reply>
          <Form.TextArea />
          <Button color="black" fluid size="small">
            Comment
          </Button>
        </Form>
        {isClicked ? <CommentSection /> : null}
      </Card.Content>
    </Card>
  );
};
export default DisplayCard;
