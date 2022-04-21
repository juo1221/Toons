import React from 'react';
import styled from 'styled-components';
import CardView from './CardView';
import CardStore from 'store/CardStore';
import Loding from './LodingView';
import { observer } from 'mobx-react-lite';

type TCardListView = {
  cardList: CardStore[];
  onToggleMyList: (card: CardStore) => void;
  filtedText: string;
};
const loadingText = '웹툰서비스가준비중입니다!잠시만기다려주세요~^^'.repeat(5).split('');

const CardListView: React.FC<TCardListView> = observer(({ cardList, onToggleMyList, filtedText }) => {
  const cardListF = () => {
    if (cardList.length) {
      const filterdCardList = cardList.filter((card) => card.data.info.title.toLowerCase().indexOf(filtedText.toLowerCase()) !== -1);
      return filterdCardList.map((card) => {
        const isLiked = card.isLiked.isLiked;
        const info = card.data.info;
        return <CardView key={info._id} info={{ ...info, isLiked }} onToggleList={card.toggle} onToggleMyList={onToggleMyList} cardStore={card} />;
      });
    } else {
      return Array.from({ length: 50 }, (_, idx) => <Loding text={loadingText[idx]} />);
    }
  };
  return <Container>{cardListF()}</Container>;
});

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  justify-content: space-around;
  padding: 10rem 0;
`;
const Loading = styled(Container)`
  color: white;
  font-size: 2rem;
`;
export default CardListView;
