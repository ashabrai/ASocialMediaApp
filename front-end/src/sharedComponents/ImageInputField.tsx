import React, {FC} from 'react';
import { Input, Segment, Label} from 'semantic-ui-react';

interface ImageInputFieldProps {
    labelValue: string;
    placeHolderValue:any;
    onChange: (e) => void;
}

const ImageInputField: FC<ImageInputFieldProps> = ({labelValue, placeHolderValue, onChange}) => {
    return (
        <Segment>
            <Label attached='top'>{labelValue}</Label>
            <Input
                fluid
                type='file'
                placeholder={placeHolderValue}
                onChange={(e) => onChange(e)}
                />
        </Segment>
    )
}

export default ImageInputField;