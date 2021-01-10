import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Button } from './index';

type Props = {
  text: string;
  isDisabled: boolean;
  onClick: () => void;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Button',
  component: 'Button',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iPhoneX',
    },
  },
};

const Template: Story<Props> = (args: Props) => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  text: 'Button',
  isDisabled: false,
  onClick: action('clicked'),
};
