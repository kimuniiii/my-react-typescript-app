import { SelectBox } from '../SelectBox';
import { dateRange, isLeapYear } from '../../../utils/FormatDate';
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

type Props = {
  yearRange: number[];
  setValueResult: (result: string) => void;
  suffix?: {
    year: string;
    month: string;
    day: string;
  };
};

export const DateSelect = ({ yearRange, setValueResult, suffix }: Props) => {
  const initialValue = '-';
  const fullDaysMonth = [1, 3, 5, 7, 8, 10, 12];

  const [year, setYear] = useState<string>(initialValue);
  const [month, setMonth] = useState<string>(initialValue);
  const [day, setDay] = useState<string>(initialValue);
  const [dayRange, setDayRange] = useState<number[]>(dateRange(31));

  /**
   * SelectBoxコンポーネントで受け取れる配列を生成する
   *
   * @param {number[]} range
   * @return {{id:string, name:string}[]}
   */
  const setSelectList = (range: number[]): { id: string; name: string }[] => {
    return range.map((cur) => {
      return {
        id: String(cur),
        name: `${cur}`,
      };
    });
  };

  const yearList = useMemo(() => setSelectList(yearRange), [yearRange]);
  const monthList = useMemo(() => setSelectList(dateRange(12)), []);
  const dayList = useMemo(() => setSelectList(dayRange), [dayRange]);

  return (
    <StyledContainer>
      <StyledParts>
        <SelectBox optionsList={yearList} setValueResult={setYear} />
        <span style={{ lineHeight: '2.2' }}>年</span>
      </StyledParts>
      <StyledParts>
        <SelectBox optionsList={monthList} setValueResult={setMonth} />
        <span style={{ lineHeight: '2.2' }}>月</span>
      </StyledParts>
      <StyledParts>
        <SelectBox optionsList={dayList} setValueResult={setDay} />
        <span style={{ lineHeight: '2.2' }}>日</span>
      </StyledParts>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
`;

const StyledParts = styled.div`
  display: flex;
`;
