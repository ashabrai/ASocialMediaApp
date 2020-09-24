import React from 'react';
import { Button } from 'semantic-ui-react';

interface ButtonComponentProps {
  color: any;
  onClick?: () => void;
  title: string;
}

const ButtonComponent = ({ color, title, onClick }: ButtonComponentProps) => (
  <Button color={color} onClick={onClick}>
    {title}
  </Button>
);

export default ButtonComponent;
