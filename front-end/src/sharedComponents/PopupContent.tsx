import React from 'react';
import { Popup } from 'semantic-ui-react';

const PopupContent = (props) => <Popup content={props.content} trigger={props.triggerButton} on="click" pinned />;

export default PopupContent;
