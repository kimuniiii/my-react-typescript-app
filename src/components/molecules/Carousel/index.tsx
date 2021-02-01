import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React, { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: ReactNode[] | ReactNode;
};

export const Carousel = ({ children }: Props) => {
  // childrenから「boolean・null・undefined」を取り除くため
  // toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
  const filteredChildren = React.Children.toArray(children);
  const childrenLength = filteredChildren.length;
  // 画面に表示されているChildren配列のIndex番号の状態を管理する
  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * 右矢印アイコンをクリックしたら画面を右にスライドさせるイベントハンドラ
   *
   */
  const goToNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  /**
   * 左矢印アイコンをクリックしたら画面を左にスライドさせるイベントハンドラ
   *
   */
  const goToPrev = () => {
    setActiveIndex((prev) => prev - 1);
  };

  return (
    <StyledContainer>
      <StyledSlidingContainer width={300}>
        <StyledArrowContainer isVisible={activeIndex !== 0} position="left">
          <ArrowBackIcon onClick={goToPrev} />
        </StyledArrowContainer>
        <StyledArrowContainer
          isVisible={activeIndex !== childrenLength - 1}
          position="right"
        >
          <ArrowForwardIcon onClick={goToNext} />
        </StyledArrowContainer>
        <StyledElementContainer
          index={activeIndex}
          length={childrenLength}
          width={300}
        >
          {React.Children.map(filteredChildren, (cur) => (
            <StyledElement>{cur}</StyledElement>
          ))}
        </StyledElementContainer>
      </StyledSlidingContainer>
      <StyledNavigationContainer>Carousel</StyledNavigationContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSlidingContainer = styled.div<{ width: number }>`
  position: relative;
  width: ${({ width }) => width}px;
  height: 348px;
  overflow: hidden;
`;

const StyledArrowContainer = styled.div<{
  isVisible: boolean;
  position: 'left' | 'right';
}>`
  position: absolute;
  top: calc(50% - 16px);
  z-index: 30;
  &:hover {
    cursor: pointer;
  }
  ${({ position }) =>
    position === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
  ${({ isVisible }) =>
    isVisible &&
    css`
      span {
        display: none;
      }
    `}
`;

const StyledElementContainer = styled.div<{
  index: number;
  length: number;
  width: number;
}>`
  position: absolute;
  top: 0;
  left: calc(50% - (${({ width }) => width} / 2) px);
  white-space: nowrap;
  transition: 0.3s all ease;
  transform: translateX(${({ index, length }) => index * (-100 / length)}%);
`;

const StyledElement = styled.div`
  display: inline-block;
  white-space: normal;
`;

const StyledNavigationContainer = styled.div``;
