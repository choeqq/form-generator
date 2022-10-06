import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form, FormProps } from '../src';

const meta: Meta = {
  title: 'Form',
  component: Form,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FormProps> = args => <Form {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const fields: FormProps['fields'] = {
  email: {
    type: 'text',
    label: 'email',
  },
  count: {
    type: 'number',
    label: 'count',
  },
};

Default.args = {
  fields,
  onSubmit: v => {
    console.log(`Values: `, v);
  },
};
