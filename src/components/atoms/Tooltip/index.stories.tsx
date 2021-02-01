import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react/types-6-0';
import { ColorPalette } from '../../../styles/Color';
import { Props } from './index';
import { Tooltip } from './index';
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Tooltip',
  component: 'Tooltip',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iPhoneX',
    },
  },
};

const Template: Story<Props> = (args: Props) => <Tooltip {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  text: 'Tooltip',
  flow: 'top-triangle',
  margin: '20px auto',
  bgColor: ColorPalette.Blue50,
  color: ColorPalette.White,
};
