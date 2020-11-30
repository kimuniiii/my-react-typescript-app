import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  isPrimary: boolean;
  onClick: () => void;
};

export const BasicButton: React.FC<Props> = (props) => {
  const { text, isPrimary, onClick } = props;
  return (
    <>
      <StyledButton isPrimary={isPrimary} onClick={onClick}>
        {text}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button<Pick<Props, 'isPrimary'>>`
  color: ${(props) => (props.isPrimary ? 'red' : 'blue')};
`;
