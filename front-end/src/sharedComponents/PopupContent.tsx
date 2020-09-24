import React from 'react';
import { Popup } from 'semantic-ui-react';

const PopupContent = ({ content, triggerButton }) => (
  <Popup content={content} trigger={triggerButton} on="click" pinned />
);

export default PopupContent;
