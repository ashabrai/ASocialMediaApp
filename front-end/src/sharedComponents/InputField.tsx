import React, { FC } from 'react';
import { Input } from 'semantic-ui-react';

interface InputFieldProps {
    placeholder: any;
    fluid?: boolean;
    onChange?: (e) => void;
    type: any; 
}

const InputField: FC<InputFieldProps> = ({ placeholder, onChange }) => <Input placeholder={placeholder} onChange={onChange} />;

export default InputField;
