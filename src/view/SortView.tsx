import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const SortView = () => {
  const buttons = ['좋아요 순', '이름 순'];
  const [clickedText, setClickedText] = useState('좋아요순');
  const setOnClick = (text: string) => {
    setClickedText(text);
  };
  const buttonList = (): JSX.Element[] => {
    return buttons.map((text, idx) => (
      <Button key={idx} clickedText={text === clickedText} onClick={() => setOnClick(text)}>
        {text}
      </Button>
    ));
  };
  return <Container>{buttonList()}</Container>;
};

type IButton = {
  clickedText: boolean;
};

const Container = styled.div`
  width: 20.019rem;
  height: 4rem;
  border: 1px solid ${({ theme }) => theme.CusColor.white};
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  ${({ theme }) => theme.CusFlex('space-between')}
`;

const Button = styled.button<IButton>`
  width: 6.8rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  color: ${({ clickedText, theme }) => theme.CusColor.gray};
  ${({ clickedText, theme }) =>
    clickedText &&
    css`
      background-color: ${theme.CusColor.yellow};
      color: ${theme.CusColor.white};
    `};
`;
export default SortView;
