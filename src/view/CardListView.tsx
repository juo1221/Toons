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
  platForm: string;
};
const LODINGTEXT1 = '좋아하는웹툰이무엇인가요?'.split('');
const LODINGTEXT2 = '좋아하는작가는누구인가요?'.split('');
const LODINGTEXT3 = '좋아하는장르는무엇인가요?'.split('');
const LODINGTEXT4 = '내최애작품은!?'.split('');
const LODINGTEXT5 = '내최애주인공은!?'.split('');
const myListText = ['#FF0000', '#000000', '#FF0000', '#000000', '#FF0000', '#000000', '#FF0000', '#000000', '#FF0000'];

const CardListView: React.FC<TCardListView> = observer(({ cardList, onToggleMyList, filtedText, platForm }) => {
  const targetText = [LODINGTEXT1, LODINGTEXT2, LODINGTEXT3, LODINGTEXT4, LODINGTEXT5][Math.floor(Math.random() * 5)];

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
        ? Array.from({ length: myListText.length }, (_, idx) => <Loding key={idx} backgroundColor={myListText[idx]} delay={idx / 10} />)
        : Array.from({ length: 28 }, (_, idx) => <Loding key={idx} text={targetText[idx]} delay={idx / 10} />);
    }
  };
  return (
    <Container id="cardlist-container" platForm={platForm === 'myList'}>
      {cardListF()}
    </Container>
  );
});
type TContainer = { platForm: boolean };

const Container = styled.div<TContainer>`
  height: 100vh;
  overflow: scroll;
  display: grid;
  grid-template-columns: ${({ platForm }) => (platForm ? 'repeat(3, 1fr)' : 'repeat(auto-fill, 200px)')};
  gap: 0.5rem;
  justify-content: center;
  justify-items: center;
  padding-bottom: 20rem;
  margin: auto;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    width: 50rem;
  }
`;

export default CardListView;
