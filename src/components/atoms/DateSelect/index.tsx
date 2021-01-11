import React from 'react';
import styled from 'styled-components';
import { SelectBox } from '../SelectBox';

export const DateSelect = () => {
  return (
    <StyledContainer>
      <SelectBox />
      月
      <SelectBox />
      日
      <SelectBox />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
`;
