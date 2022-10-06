import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import TextField from './components/TextField';
import { Field, FormProps } from './types';

function renderFields([name, fieldProps]: [string, Field]) {
  if (fieldProps.type === 'text') {
    return <TextField {...fieldProps} name={name} />;
  }

  return <div>Uknown type {fieldProps.type}</div>;
}

export function Form({ fields, onSubmit }: FormProps) {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {Object.entries(fields).map(renderFields)}
        <button type="submit">Save</button>
      </form>
    </FormProvider>
  );
}
