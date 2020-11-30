import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';
import { BasicButton } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'atoms',
  component: 'Button',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iPhoneX',
    },
  },
  argTypes: {
    booleanFlag: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Buttons: { (): JSX.Element } = () => {
  return (
    <BasicButton
      text={'Button'}
      onClick={action('clicked')}
      isPrimary={false}
      isDisabled={false}
    />
  );
};
