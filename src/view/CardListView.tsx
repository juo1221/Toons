import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import CardView from './CardView';
import CardStore from 'store/CardStore';
import { TData } from '../api/WebToonData';
import { observer } from 'mobx-react-lite';

type TCardListView = {
  cardList: CardStore[];
};

const CardListView: React.FC<TCardListView> = observer(({ cardList }) => {
  const cardListF = () => {
    return cardList.map((card) => {
      const isLiked = card.isLiked.isLiked;
      const info = card.data.info;
      return <CardView key={info._id} info={{ ...info, isLiked }} onToggleList={card.toggle} />;
    });
  };
  return <Container>{cardListF()}</Container>;
});

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8rem;
  width: 88.706rem;
`;

export default CardListView;
