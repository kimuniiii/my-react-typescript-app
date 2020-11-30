import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  onClick: () => void;
};

export const BasicButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  color: red;
`;
