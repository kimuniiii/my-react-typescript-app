// import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Toggle } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Toggle',
  component: 'Toggle',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iPhoneX',
    },
  },
};

const Template: Story = () => <Toggle />;

export const Basic = Template.bind({});
