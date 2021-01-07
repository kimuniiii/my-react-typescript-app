// import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { BasicModal } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Modal',
  component: 'Modal',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iPhoneX',
    },
  },
};

const Template: Story = () => <BasicModal />;

export const Basic = Template.bind({});
