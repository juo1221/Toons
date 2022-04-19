import React from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';

type TDateView = {
  day: string;
  onSetDayNumber: (value: number) => void;
};

const DateView: React.FC<TDateView> = observer(({ day, onSetDayNumber }) => {
  const dates = ['월', '화', '수', '목', '금', '토', '일', '완결'];
  const setOnClick = (text: string) => {
    const n = dates.indexOf(text);
    onSetDayNumber(n);
  };
  const dateList = (): JSX.Element[] => {
    return dates.map((date, idx) => (
      <Text key={idx} clickedText={day === date} onClick={() => setOnClick(date)}>
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
