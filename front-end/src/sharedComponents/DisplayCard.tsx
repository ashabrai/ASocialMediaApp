/* eslint-disable no-restricted-imports */
import React from 'react';
import { Card, Image, Form, Button } from 'semantic-ui-react';

const DisplayCard = (props: any) => {
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
    headerContent,
  } = props;

  return (
    <Card style={{ width: '40vw' }}>
      <Card.Content>
        {headerContent}
        <Card.Header>{header}</Card.Header>
      </Card.Content>
      {image ? <Image src={image} wrapped ui={false} /> : null}
      <Card.Content>
        {content ? props.content : null}
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
          {additionalCardSection ? additionalCardSection : null}
        </Card.Content>
      ) : null}
    </Card>
  );
};
export default DisplayCard;
