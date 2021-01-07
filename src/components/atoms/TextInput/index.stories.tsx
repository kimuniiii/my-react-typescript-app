// import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { TextInput } from './index';

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

const Template: Story = () => <TextInput />;

export const Basic = Template.bind({});
