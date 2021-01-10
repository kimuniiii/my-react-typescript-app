import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  disabled: boolean;
  onClick: () => void;
};

export const Checkbox: FC<Partial<Props>> = ({
  name = '',
  value = '',
  label = '',
  checked,
  disabled,
  onClick,
}) => {
  return (
    <>
      <StyledInput
        id="id"
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onClick={onClick}
      />
      <StyledLabel htmlFor="id">{label}</StyledLabel>
    </>
  );
};

const StyledInput = styled.input`
  border-radius: 50%;
`;

const StyledLabel = styled.label`
  color: red;
`;
