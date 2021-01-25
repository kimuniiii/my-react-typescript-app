import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelectBox } from './useSelectBox';

export const SelectBox = () => {
  const {
    placeholder,
    showOptionList,
    optionsList,
    selectedOption,
    handleChange,
    handleClickOnOption,
  } = useSelectBox({
    placeholder: '項目を選択してください',
    optionsList: [
      { id: '1', name: '木村' },
      { id: '2', name: '石原' },
      { id: '3', name: '下野' },
    ],
  });

  return (
    <StyledSelectButton>
      <StyledSelectedOption listIsOpen={showOptionList} onClick={handleChange}>
        {selectedOption === undefined ? (
          <span className="selected-name">{placeholder}</span>
        ) : (
          <span className="selected-name">
            {selectedOption.name === '' ? placeholder : selectedOption.name}
          </span>
        )}
      </StyledSelectedOption>
      {showOptionList && (
        <StyledSelectedList>
          {optionsList?.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => handleClickOnOption(option.id, option.name)}
              >
                <span className="option-name">{option.name}</span>
              </li>
            );
          })}
        </StyledSelectedList>
      )}
    </StyledSelectButton>
  );
};

const StyledSelectButton = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  /* % = 親要素の幅に対する比率 */
  width: 100%;
  font-weight: bold;
  cursor: pointer;

  .selected-name,
  .option-name {
    padding: 5px;
    color: gray;
  }
`;

const StyledSelectedOption = styled.div<{ listIsOpen: boolean }>`
  display: flex;
  border: 1px solid gray;
  ${({ listIsOpen }) => {
    return listIsOpen
      ? css`
          border: 1px solid blue;
          .selected-name {
            color: black;
          }
        `
      : null;
  }}
`;

const StyledSelectedList = styled.ul`
  position: absolute;
  top: 36px;
  left: -38px;
  width: 100%;

  li {
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    list-style-type: none;
    cursor: pointer;
    &:hover {
      background-color: #c7c2c2;
    }
  }

  /* 線の重なりを消す方法 */
  li + li {
    border-top: none;
  }
`;
