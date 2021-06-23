import { css } from '@emotion/react';
import React, { useState, FC } from 'react';
import styled from '@emotion/styled';

export const Modal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <StyledOpenButton onClick={handleChange}>Open</StyledOpenButton>
      {isOpen && (
        <StyledModalOverlay isOpen={isOpen}>
          <StyledModalBody>
            <StyledCloseButton onClick={handleChange}>×</StyledCloseButton>
            モーダルテキストを変更します！
          </StyledModalBody>
        </StyledModalOverlay>
      )}
    </>
  );
};

const StyledModalOverlay = styled.div<{ isOpen: boolean }>`
  /* 画面中央にモーダルを寄せる設定 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* モーダル実装の際にはお決まりの実装 */
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 999;
  /* 初期表示 */
  opacity: 0;
  visibility: hidden;
  ${(isOpen) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`;

const StyledModalBody = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 30px 20px;
`;

const StyledOpenButton = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;
