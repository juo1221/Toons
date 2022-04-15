import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import CardView from './CardView';

const CardListView = () => {
  const mocks = [
    { src: '/image.jpeg', title: '윈드 브레이커', id: uuidv4() },
    { src: '/image.jpeg', title: '윈드 브레이커', id: uuidv4() },
    { src: '/image.jpeg', title: '윈드 브레이커', id: uuidv4() },
    { src: '/image.jpeg', title: '윈드 브레이커', id: uuidv4() },
    { src: '/image.jpeg', title: '윈드 브레이커', id: uuidv4() },
    { src: '/image.jpeg', title: '윈드 브레이커', id: uuidv4() },
    { src: '/image.jpeg', title: '윈드 브레이커', id: uuidv4() },
    { src: '/image.jpeg', title: '윈드 브레이커', id: uuidv4() },
  ];
  const cardList = () => {
    return mocks.map((card) => {
      return <CardView key={card.id} src={card.src} title={card.title} />;
    });
  };
  return <Container>{cardList()}</Container>;
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8rem;
  width: 88.706rem;
`;

export default CardListView;
