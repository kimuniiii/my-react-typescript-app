// import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react/types-6-0';
import { getYear, subYears } from 'date-fns';
import React, { useState } from 'react';
import { DateSelect } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'DateSelect',
  component: 'DateSelect',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iPhoneX',
    },
  },
};

const Template: Story = () => {
  const defaultValue = '1940-02-29T03:05:00';
  const [valueResult, setValueResult] = useState(defaultValue);
  return (
    <DateSelect yearRange={subtractYearRange} setValueResult={setValueResult} />
  );
};

export const Basic = Template.bind({});

const Range = {
  From: 10,
  To: 5,
} as const;

const minYearRange = getYear(subYears(new Date(), Range.From));
const maxYearRange = getYear(subYears(new Date(), Range.To));
const subtractYearRange = [...Array(maxYearRange).keys()].slice(minYearRange);
