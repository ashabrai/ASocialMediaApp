import React, { FC } from 'react';
import { Button } from 'semantic-ui-react';

interface ButtonComponentProps {
  color: any;
  onClick?: () => void;
  title: string;
}

const ButtonComponent: FC<ButtonComponentProps> = ({ color, title, onClick }) => (
  <Button color={color} onClick={onClick}>
    {title}
  </Button>
);

export default ButtonComponent;
