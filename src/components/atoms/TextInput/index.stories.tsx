// import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react/types-6-0';
import React, { useState, ChangeEvent } from 'react';
import { TextInput } from './index';

type Props = {
  type: 'text' | 'email' | 'password' | 'tel';
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'TextInput',
  component: 'TextInput',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iPhoneX',
    },
  },
};

const Template: Story<Props> = (args: Props) => {
  const [state, setState] = useState({ value: '' });
  const value = state.value;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ value: e.target.value });
  };
  return (
    <TextInput {...args} type="text" value={value} onChange={handleChange} />
  );
};

export const Basic = Template.bind({});

Basic.args = {
  type: 'text',
  placeholder: '項目を入力してください',
};
