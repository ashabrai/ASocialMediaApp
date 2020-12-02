import React, {FC} from 'react';
import { Modal, Button } from 'semantic-ui-react';

interface ModalContentProps {
    triggerContent: any;
    onClose: any;
    onOpen: any;
    open: boolean;
    headerValue: string;
    content: any;
    handleClick: () => void;
    handleCancel: () => void
    additionalContent?: string;
}

const ModalContent: FC<ModalContentProps> = ({triggerContent, onClose, onOpen, open, headerValue, content, handleClick, handleCancel }) => {

return(
    <Modal
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      trigger={<Button>{triggerContent}</Button>}
    >
      <Modal.Header>{headerValue}</Modal.Header>
      <Modal.Content>
        {content}
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => handleCancel()}>
            Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={() => handleClick()}
          positive
        />
      </Modal.Actions>
    </Modal>
)

}
export default ModalContent;