import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { FileUpload } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'FileUpload',
  component: 'FileUpload',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iPhoneX',
    },
  },
};

const Template: Story = (args) => <FileUpload {...args} />;

export const Basic = Template.bind({});
