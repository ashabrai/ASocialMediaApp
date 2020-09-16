/* eslint-disable no-restricted-imports */
import React from 'react';
import { Card, Image, Form, Button, Reveal } from 'semantic-ui-react';

const DisplayCard = (props: any) => {
  console.log(props, ' propsß');
  const {
    image,
    content,
    header,
    meta,
    description,
    extraContent,
    textAreaOnChange,
    additionalCardSection,
    onButtonClick,
    buttonContent,
    displayExtraContent,
  } = props;

  return (
    <Card style={{ width: '40vw' }}>
      {image ? <Image src={image} wrapped ui={false} /> : null}
      <Card.Content>
        {content ? props.content : null}
        {header ? <Card.Header>{header}</Card.Header> : null}
        {meta ? (
          <Card.Meta>
            <span>{meta}</span>
          </Card.Meta>
        ) : null}
        {description ? <Card.Description>{description}</Card.Description> : null}
      </Card.Content>
      {extraContent ? (
        <Card.Content extra>
          <Form reply>
            <Form.TextArea onChange={(e) => textAreaOnChange(e)} />
            <Button
              color="black"
              fluid
              size="small"
              onClick={() => {
                onButtonClick();
              }}
            >
              {buttonContent}
            </Button>
          </Form>
          {displayExtraContent ? additionalCardSection : null}
        </Card.Content>
      ) : null}
    </Card>
  );
};
export default DisplayCard;
