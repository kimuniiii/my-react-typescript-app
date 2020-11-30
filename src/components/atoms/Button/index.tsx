import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

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
        <StyledButton onClick={onClick} isPrimary={false}>
          {text}
        </StyledButton>
      </ThemeProvider>
    </>
  );
};

const StyledButton = styled.button<Pick<Props, 'isPrimary'>>`
  color: ${(theme) => (theme.isPrimary ? 'red' : 'blue')};
`;
