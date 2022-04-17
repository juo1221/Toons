import React from 'react';
import styled from 'styled-components';
import CardView from './CardView';
import CardStore from 'store/CardStore';
import { observer } from 'mobx-react-lite';

type TCardListView = {
  cardList: CardStore[];
  onToggleMyList: (card: CardStore) => void;
  filtedText: string;
};

const CardListView: React.FC<TCardListView> = observer(({ cardList, onToggleMyList, filtedText }) => {
  const cardListF = () => {
    const filterdCardList = cardList.filter((card) => card.data.info.title.toLowerCase().indexOf(filtedText.toLowerCase()) !== -1);
    return filterdCardList.map((card) => {
      const isLiked = card.isLiked.isLiked;
      const info = card.data.info;
      return <CardView key={info._id} info={{ ...info, isLiked }} onToggleList={card.toggle} onToggleMyList={onToggleMyList} cardStore={card} />;
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
