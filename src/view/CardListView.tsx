import React from 'react';
import styled from 'styled-components';
import CardView from './CardView';
import CardStore from 'store/CardStore';
import Loding from './LodingView';
import { MdOutlineGrass } from 'react-icons/md';
import { observer } from 'mobx-react-lite';

type TCardListView = {
  cardList: CardStore[];
  onToggleMyList: (card: CardStore) => void;
  filtedText: string;
  platForm: string;
};
const loadingText = '좋아하는    웹툰이    무엇인가요?       좋아하는    장르는    무엇인가요?'.repeat(1).split('');
const icon = () => <MdOutlineGrass fill="#82dd82" />;
const myListText = [
  icon(),
  icon(),
  icon(),
  '',
  icon(),
  icon(),
  icon(),
  icon(),
  '',
  icon(),
  '',
  icon(),
  '',
  icon(),
  icon(),
  '',
  icon(),
  '',
  icon(),
  icon(),
  icon(),
];

const CardListView: React.FC<TCardListView> = observer(({ cardList, onToggleMyList, filtedText, platForm }) => {
  const cardListF = () => {
    if (cardList.length) {
      const filterdCardList = cardList.filter((card) => card.data.info.title.toLowerCase().indexOf(filtedText.toLowerCase()) !== -1);
      return filterdCardList.map((card) => {
        const isLiked = card.isLiked.isLiked;
        const info = card.data.info;
        return <CardView key={info._id} info={{ ...info, isLiked }} onToggleList={card.toggle} onToggleMyList={onToggleMyList} cardStore={card} />;
      });
    } else {
      return platForm === 'myList'
        ? Array.from({ length: myListText.length }, (_, idx) => <Loding key={idx} text={myListText[idx]} />)
        : Array.from({ length: 56 }, (_, idx) => <Loding key={idx} text={loadingText[idx]} />);
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
