import React, { FC } from 'react';
import { Input } from 'semantic-ui-react';

interface InputFieldProps {
  input: {
    placeholder: any;
  };
}

const InputField: FC<InputFieldProps> = ({ input }) => <Input placeholder={input.placeholder} />;

export default InputField;
