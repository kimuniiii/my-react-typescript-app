import React, { FC } from 'react';
import styled, { css } from 'styled-components';

export const BasicModal: FC = () => {
  return (
    <>
      <StyledModalBase>
        <StyledModalBody>モーダルテキスト</StyledModalBody>
      </StyledModalBase>
    </>
  );
};

const StyledModalBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModalBody = styled.div`
  color: red;
`;
