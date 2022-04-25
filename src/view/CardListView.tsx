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
const LODINGTEXT1 = '좋아하는    웹툰이    무엇인가요?'.split('');
const LODINGTEXT2 = '좋아하는    작가는    누구인가요?'.split('');
const LODINGTEXT3 = '좋아하는    장르는    무엇인가요?'.split('');
const LODINGTEXT4 = '내 최애     작품은    !?'.split('');
const LODINGTEXT5 = '내 최애     주인공은    !?'.split('');
const myListText = [
  '#82dd82',
  '#82dd82',
  '#82dd82',
  '#000000',
  '#82dd82',
  '#82dd82',
  '#82dd82',
  '#82dd82',
  '#000000',
  '#82dd82',
  '#000000',
  '#82dd82',
  '#000000',
  '#82dd82',
  '#82dd82',
  '#000000',
  '#82dd82',
  '#000000',
  '#82dd82',
  '#82dd82',
  '#82dd82',
];

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
  return <Container>{cardListF()}</Container>;
});

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 0.5rem;
  justify-content: center;
  justify-items: center;
  padding-top: 10rem;
  padding-bottom: 20rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 200px);
    width: 50rem;
  }
`;
const Loading = styled(Container)`
  color: white;
  font-size: 2rem;
`;
export default CardListView;
