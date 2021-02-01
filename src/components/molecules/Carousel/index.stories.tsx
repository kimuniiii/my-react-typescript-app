import { Carousel } from './index';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Carousel',
  component: 'Carousel',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iPhoneX',
    },
  },
};

const StyledSection = styled.div<{ color: string }>`
  width: 300px;
  height: 348px;
  background-color: ${({ color }) => color};
`;

const Template: Story = (args) => (
  <Carousel>
    <StyledSection color="skyblue">水色</StyledSection>
    <StyledSection color="yellow">黄色</StyledSection>
    <StyledSection color="red">赤色</StyledSection>
    <StyledSection color="blue">青色</StyledSection>
  </Carousel>
);

export const Basic = Template.bind({});
