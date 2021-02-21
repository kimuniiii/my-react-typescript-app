import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Button } from './index';

type ButtonProps = ComponentProps<typeof Button>;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Button',
  component: 'Button',
};

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  text: 'Button',
  isDisabled: false,
  onClick: () => alert('click'),
};
