import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

type Props = {
  type: 'text' | 'email' | 'password' | 'tel';
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  type,
  id,
  name,
  value = '',
  placeholder = '',
  maxLength,
  readOnly,
  disabled,
  onChange,
}: Props) => {
  return (
    <StyledBase>
      <StyledInput
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
      />
    </StyledBase>
  );
};

const StyledBase = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 8px;
  font-weight: normal;
`;
