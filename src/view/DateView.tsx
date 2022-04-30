import React from 'react';
import styled from 'styled-components';
import { useFont } from '../hooks/font-hooks';
import { observer } from 'mobx-react-lite';

type TDateView = {
  day: string;
  onSetDayNumber: (value: number) => void;
};

const DateView: React.FC<TDateView> = observer(({ day, onSetDayNumber }) => {
  const BMYEONSUNGLoaded = useFont('BMYEONSUNG');

  const dates = ['월', '화', '수', '목', '금', '토', '일', '완결'];
  const setOnClick = (text: string) => {
    const n = dates.indexOf(text);
    onSetDayNumber(n);
  };
  const dateList = (): JSX.Element[] => {
    return dates.map((date, idx) => (
      <Text key={idx} clickedText={day === date} onClick={() => setOnClick(date)} BMYEONSUNGLoaded={BMYEONSUNGLoaded}>
        <span>{date}</span>
      </Text>
    ));
  };
  return <Container id="date-bar">{dateList()}</Container>;
});

type TText = {
  clickedText: boolean;
  BMYEONSUNGLoaded: boolean;
};

const Container = styled.div`
  height: 5rem;
  color: ${({ theme }) => theme.CusColor.white};
  ${({ theme }) => theme.CusFlex('space-between')};
  margin: auto;
  @media screen and (max-width: 1024px) {
    width: 60rem;
  }
`;
const Text = styled.div<TText>`
  font-weight: 500;
  font-size: 2rem;
  width: 5.005rem;
  height: 5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${({ clickedText, theme }) => clickedText && theme.CusColor.yellow};
  opacity: ${({ BMYEONSUNGLoaded }) => (BMYEONSUNGLoaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  ${({ theme }) => theme.CusFlex('center', 'center')};
  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
  }
`;
export default DateView;
