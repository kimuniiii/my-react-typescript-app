// import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Toggle } from './index';

type Props = {
  id: string;
  isChecked: boolean;
  onChange: () => void;
};

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

const Template: Story<Props> = (args: Props) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <Toggle
      id="toggle"
      isChecked={isOn}
      onChange={() => setIsOn((prevState) => !prevState)}
    />
  );
};

export const Basic = Template.bind({});
