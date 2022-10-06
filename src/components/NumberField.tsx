import React from 'react';
import { useFormContext } from 'react-hook-form';
import { NumberFieldProps } from '../types';

function NumberField({
  label,
  name,
  placeholder,
}: NumberFieldProps & { name: string }) {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="number"
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
}

export default NumberField;
