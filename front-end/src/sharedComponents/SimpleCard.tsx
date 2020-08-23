import React from 'react';
import { Card } from 'semantic-ui-react';

const SimpleCard = (data: any) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{data.header}</Card.Header>
        <Card.Description>{data.body}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default SimpleCard;
