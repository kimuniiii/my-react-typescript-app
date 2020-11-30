import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  text: string;
  onClick: () => void;
  isDisabled: boolean;
};

export const BasicButton: React.FC<Props> = (props) => {
  const { text, onClick, isDisabled } = props;
  return (
    <>
      <StyledButton onClick={onClick} isDisabled={isDisabled}>
        {text}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button<Pick<Props, 'isDisabled'>>`
  background: #ffffff;
  color: black;
  border-color: black;
  cursor: pointer;
  ${(props) =>
    props.isDisabled &&
    css`
      opacity: 0.2;
      pointer-events: none;
    `};
`;
