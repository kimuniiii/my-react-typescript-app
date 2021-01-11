// import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { SelectBox } from './index';

type OptionId = string;

type SelectOption = {
  id: OptionId;
  name: string;
};

type Props = {
  placeholder?: string;
  optionsList: SelectOption[];
};

const optionsList: SelectOption[] = [
  {
    id: '1',
    name: '男ですか？',
  },
  {
    id: '2',
    name: '女ですか？',
  },
  {
    id: '3',
    name: 'おかまですか？',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'SelectBox',
  component: 'SelectBox',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iPhoneX',
    },
  },
};

const Template: Story<Props> = (args: Props) => <SelectBox {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  placeholder: '項目を選択してください',
  optionsList: optionsList,
};
