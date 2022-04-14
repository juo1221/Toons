import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const DateView = () => {
  const dates = ['월', '화', '수', '목', '금', '토', '일', '완결'];
  const [clickedText, setClickedText] = useState('월');

  const setOnClick = (text: string) => {
    setClickedText(text);
  };

  const dateList = (): JSX.Element[] => {
    return dates.map((date, idx) => (
      <Text key={idx} clickedText={clickedText === date} onClick={() => setOnClick(date)}>
        <span>{date}</span>
      </Text>
    ));
  };
  return <Container>{dateList()}</Container>;
};
type IText = {
  clickedText: boolean;
};

const Container = styled.div`
  width: 83.478rem;
  height: 5rem;
  margin: 0 auto;
  ${({ theme }) => theme.CusFlex('space-between')}
  color: ${({ theme }) => theme.CusColor.white};
`;
const Text = styled.div<IText>`
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
