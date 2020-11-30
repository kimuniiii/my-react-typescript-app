import { action } from '@storybook/addon-actions';
import React from 'react';
import { BasicButton } from './index';

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
  return (
    <BasicButton
      text={'Button'}
      onClick={action('clicked')}
      isPrimary={false}
      isDisabled={true}
    />
  );
};
