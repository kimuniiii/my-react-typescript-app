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
  ${(props) =>
    props.isDisabled &&
    css`
      pointer-events: none;
    `};
`;
