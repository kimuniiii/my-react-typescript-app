import React, { FC } from 'react';
import ImageGallery from 'react-image-gallery';

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

export const MyGallery: FC<Props> = () => {
  return <ImageGallery items={images} />;
};
