import React from 'react';
import styled from 'styled-components';

type Props = {
  url: string;
};

export const PreviewImage = ({ url }: Props) => (
  <StyledImg src={url} alt="preview" />
);

const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
