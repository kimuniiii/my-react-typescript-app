import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

type Props = {
  text: string;
  onClick: () => void;
  isPrimary: boolean;
  isDisabled: boolean;
};

export const BasicButton: React.FC<Props> = (props) => {
  const { text, onClick, isPrimary, isDisabled } = props;
  const theme = { isPrimary, isDisabled };
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledButton onClick={onClick} isPrimary={false} isDisabled={false}>
          {text}
        </StyledButton>
      </ThemeProvider>
    </>
  );
};

const StyledButton = styled.button<Pick<Props, 'isPrimary' | 'isDisabled'>>`
  ${(theme) =>
    theme.isPrimary &&
    css`
      color: 'red';
    `};
  ${(theme) =>
    theme.isDisabled &&
    css`
      pointer-events: none;
    `}
`;
