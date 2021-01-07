import React, { FC, useState } from 'react';
// import styled, { css } from 'styled-components';

type Props = {
  name: string;
  value: string;
  label: string;
  disabled: boolean;
};

export const Checkbox: FC<Partial<Props>> = ({
  name = '',
  value = '',
  label = '',
  disabled,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <input
        id="id"
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onClick={handleChange}
      />
      <label htmlFor="id">{label}</label>
    </>
  );
};
