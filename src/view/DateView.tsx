import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';

type TDateView = {
  day: string;
  onSetDayNumber: (value: number) => void;
  onGetList: (day: number) => void;
};

const DateView: React.FC<TDateView> = observer(({ day, onSetDayNumber, onGetList }) => {
  const dates = ['월', '화', '수', '목', '금', '토', '일', '완결'];
  const [clickedText, setClickedText] = useState(day);
  const setOnClick = (text: string) => {
    setClickedText(text);
  };
  useEffect(() => {
    const n = dates.indexOf(clickedText);
    onSetDayNumber(n);
    onGetList(n);
  }, [clickedText]);
  const dateList = (): JSX.Element[] => {
    return dates.map((date, idx) => (
      <Text key={idx} clickedText={clickedText === date} onClick={() => setOnClick(date)}>
        <span>{date}</span>
      </Text>
    ));
  };
  return <Container>{dateList()}</Container>;
});

type TText = {
  clickedText: boolean;
};

const Container = styled.div`
  width: 83.478rem;
  height: 5rem;
  margin: 0 auto;
  ${({ theme }) => theme.CusFlex('space-between')}
  color: ${({ theme }) => theme.CusColor.white};
`;
const Text = styled.div<TText>`
  font-weight: 500;
  font-size: 2rem;
  width: 5.005rem;
  height: 5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${({ theme }) => theme.CusFlex('center', 'center')};
  background-color: ${({ clickedText, theme }) => clickedText && theme.CusColor.yellow};
`;
export default DateView;
