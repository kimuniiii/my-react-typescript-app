import { action } from '@storybook/addon-actions';
import React from 'react';
import { BasicButton } from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'atoms',
  component: 'Button',
  argTypes: {
    booleanFlag: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Buttons = () => {
  return <BasicButton onClick={action('clicked')} text={'Button'} />;
};
