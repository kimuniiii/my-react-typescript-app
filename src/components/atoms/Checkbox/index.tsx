import React, { FC } from 'react';
// import styled, { css } from 'styled-components';

type Props = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  disabled: boolean;
};

export const Checkbox: FC<Props> = ({
  name = '',
  value = '',
  label = '',
  checked,
  disabled,
}) => {
  return (
    <>
      <input
        id="id"
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor="id">{label}</label>
    </>
  );
};
