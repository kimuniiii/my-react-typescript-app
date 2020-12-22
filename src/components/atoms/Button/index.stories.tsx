import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { BasicButton } from './index';

type Props = {
  text: string;
  onClick: () => void;
  isDisabled: boolean;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Buttons',
  component: 'Button',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iPhoneX',
    },
  },
};

const Template: Story<Props> = (args: Props) => <BasicButton {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  text: 'Button',
  onClick: action('clicked'),
  isDisabled: false,
};
