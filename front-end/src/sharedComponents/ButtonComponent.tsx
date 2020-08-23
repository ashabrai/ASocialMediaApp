import React from 'react';
import { Button } from 'semantic-ui-react';

const ButtonComponent = (props) => <Button color={props.color}>{props.title}</Button>;

export default ButtonComponent;
