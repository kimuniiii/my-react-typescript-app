import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { MyGallery } from './index';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';

type Props = {
  items: { original: string; thumbnail: string }[];
};

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ImageGallery',
  component: 'ImageGallery',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iPhoneX',
    },
  },
};

const Template: Story<Props> = (args: Props) => <MyGallery {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  items: images,
};
