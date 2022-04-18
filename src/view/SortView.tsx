import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';

type TSortView = {
  onSort: (criteria: string) => void;
};

const SortView: React.FC<TSortView> = observer(({ onSort }) => {
  const buttons = ['좋아요 순', '이름 순'];
  const [clickedText, setClickedText] = useState('좋아요순');
  const setOnClick = (text: string) => {
    onSort(text);
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
});

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
  color: ${({ theme }) => theme.CusColor.gray};
  &:active {
    background-color: ${({ theme }) => theme.CusColor.yellow};
    color: ${({ theme }) => theme.CusColor.white};
  }
`;
export default SortView;
