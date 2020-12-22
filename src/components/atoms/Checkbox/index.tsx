import React, { FC } from 'react';
// import styled, { css } from 'styled-components';

type Props = {
  text: string;
};

export const Checkbox: FC<Props> = ({ text }) => {
  return (
    <>
      <input type="checkbox" name={text} value={text} />
    </>
  );
};
