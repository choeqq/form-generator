import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextFieldProps } from '../types';

function TextField({
  label,
  name,
  htmlType = 'text',
  placeholder,
}: TextFieldProps & { name: string }) {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={htmlType}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
}

export default TextField;
