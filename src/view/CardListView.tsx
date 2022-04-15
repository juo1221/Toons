import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import CardView from './CardView';
import { TData } from '../api/WebToonData';
import { observer } from 'mobx-react-lite';

type TCardListView = {
  list: TData[];
};

const CardListView: React.FC<TCardListView> = observer(({ list }) => {
  const cardList = () => {
    return list.map((info) => {
      return <CardView key={info._id} src={info.img} title={info.title} />;
    });
  };
  return <Container>{cardList()}</Container>;
});

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8rem;
  width: 88.706rem;
`;

export default CardListView;
