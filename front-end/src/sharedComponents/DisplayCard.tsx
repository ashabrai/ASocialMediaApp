import React, { FC } from 'react';
import { Card, Image, Form, Button } from 'semantic-ui-react';

interface DisplayCardProps {
  image?: string;
  content?: any;
  header?: string;
  meta?: string;
  description?: any;
  extraContent?: boolean;
  textAreaOnChange?: (e) => void;
  additionalCardSection?: any;
  onButtonClick?: () => void;
  buttonContent?: string;
  headerContent?: any;
}

const DisplayCard: FC<DisplayCardProps> = ({
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
}) => {
  return (
    <Card style={{ width: '40vw' }}>
      <Card.Content>
        {headerContent}
        <Card.Header>{header}</Card.Header>
      </Card.Content>
      {image ? <Image src={image} wrapped ui={false} /> : null}
      <Card.Content>
        {content ? content : null}
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
