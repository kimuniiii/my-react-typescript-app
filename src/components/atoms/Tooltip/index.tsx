import { ColorPalette } from '../../../styles/Color';
import React from 'react';
import styled, { css } from 'styled-components';

export type Props = {
  text: string;
  flow: 'top-triangle' | 'bottom-triangle' | 'left-triangle' | 'right-triangle';
  margin?: string;
  bgColor?: string;
  color?: string;
};

export const Tooltip = ({
  text,
  flow = 'top-triangle',
  margin = '0 0 0 0',
  bgColor = ColorPalette.Blue50,
  color = ColorPalette.White,
}: Props) => {
  return (
    <StyledTooltip flow={flow} margin={margin} bgColor={bgColor} color={color}>
      {text}
    </StyledTooltip>
  );
};

const StyledTooltip = styled.div<Omit<Props, 'text'>>`
  position: relative;
  width: 100px;
  height: 20px;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 12px;
  text-align: center;
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  margin: ${({ margin }) => margin};

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;

    ${({ flow, bgColor }) => {
      switch (flow) {
        case 'top-triangle':
          return css`
            bottom: 100%; /* 上にフィット */
            left: 50%; /* 中央配置 */
            transform: translateX(-50%); /* 一応ズレを補正 */
            border-bottom: solid ${bgColor} 10px; /* borderで上向きの三角形を作っている */
            border-left: solid transparent 10px;
            border-right: solid transparent 10px;
          `;
        case 'bottom-triangle':
          return css`
            top: 100%; /* 下にフィット */
            left: 50%; /* 中央配置 */
            transform: translateX(-50%); /* 一応ズレを補正 */
            border-top: solid ${bgColor} 10px; /* borderで下向きの三角形を作っている */
            border-left: solid transparent 10px;
            border-right: solid transparent 10px;
          `;
        case 'left-triangle':
          return css`
            right: 100%; /* 左にフィット */
            top: 50%; /* 中央配置 */
            transform: translateY(-50%); /* 一応ズレを補正 */
            border-right: solid ${bgColor} 10px; /* borderで下向きの三角形を作っている */
            border-top: solid transparent 5px;
            border-bottom: solid transparent 5px;
          `;
        case 'right-triangle':
          return css`
            left: 100%; /* 右にフィット */
            top: 50%; /* 中央配置 */
            transform: translateY(-50%); /* 一応ズレを補正 */
            border-left: solid ${bgColor} 10px; /* borderで下向きの三角形を作っている */
            border-top: solid transparent 5px;
            border-bottom: solid transparent 5px;
          `;
      }
    }}
  }
`;
