import React, { FC } from 'react';
import { Popup } from 'semantic-ui-react';

interface PopupContentProps {
  content: any;
  triggerButton: any;
}

const PopupContent: FC<PopupContentProps> = ({ content, triggerButton }) => (
  <Popup content={content} trigger={triggerButton} on="click" pinned />
);

export default PopupContent;
