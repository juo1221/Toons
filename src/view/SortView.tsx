import React, { useState } from 'react';
import styled from 'styled-components';
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
  return <Container id="sort-bar">{buttonList()}</Container>;
});

type IButton = {
  clickedText: boolean;
};

const Container = styled.div`
  width: 20rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;

  background-color: ${({ theme }) => theme.CusColor.black};
  ${({ theme }) => theme.CusFlex('space-between')}
`;

const Button = styled.button<IButton>`
  border-radius: 2rem;
  font-size: 1.5rem;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.CusColor.black};
  color: ${({ theme }) => theme.CusColor.gray};
  &:active {
    background-color: ${({ theme }) => theme.CusColor.yellow};
    color: ${({ theme }) => theme.CusColor.white};
  }
`;
export default SortView;
