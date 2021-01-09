import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  id: string;
  isChecked: boolean;
  onChange: () => void;
};

export const Toggle = ({ id, isChecked, onChange }: Props) => {
  return (
    <StyledContainer>
      <StyledBase>
        <StyledInput
          name={id}
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        <StyledLabel htmlFor={id} isChecked={isChecked}>
          <StyledCircle isChecked={isChecked} />
        </StyledLabel>
      </StyledBase>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledBase = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
`;

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  opacity: 0;
`;

const StyledLabel = styled.label<Pick<Props, 'isChecked'>>`
  position: relative;
  display: block;
  /* % = 親要素の幅に対する比率 */
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 12px;
  background-color: ${({ isChecked }) => (isChecked ? '#67c5ff' : 'gray')};
  transition: background-color 0.5s;
`;

const StyledCircle = styled.span<Pick<Props, 'isChecked'>>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  height: 16px;
  margin: auto;
  border-radius: 50%;
  background-color: #ffffff;
  transition: transform 0.5s;
  ${({ isChecked }) =>
    isChecked
      ? css`
          transform: translateX(28px);
        `
      : css`
          transform: translateX(4px);
        `}
`;
