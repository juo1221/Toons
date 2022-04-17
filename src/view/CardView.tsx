import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { TData } from '../api/WebToonData';
import { observer } from 'mobx-react-lite';
import CardStore from 'store/CardStore';

type TCard = {
  info: TData & Like;
  onToggleList: () => void;
  cardStore: CardStore;
  onToggleMyList: (card: CardStore) => void;
};
type Like = {
  isLiked: boolean;
};

const CardView: React.FC<TCard> = observer(({ info, onToggleList, onToggleMyList, cardStore }) => {
  const setOnClick = () => {
    onToggleList();
    onToggleMyList(cardStore);
  };

  return (
    <Card>
      <ImageBox>
        <img src={info.img} alt="이미지" />
      </ImageBox>
      <Title>{info.title}</Title>
      <Sub isLiked={info.isLiked}>
        <FaHeart onClick={setOnClick} />
      </Sub>
    </Card>
  );
});

type TSub = {
  isLiked: boolean;
};

const Card = styled.div`
  position: relative;
  width: 16.015rem;
  ${({ theme }) => theme.CusFlex('none', 'none', 'column')}
`;
const ImageBox = styled.div`
  height: 15.7rem;
  cursor: pointer;
  border-radius: 5px 5px 0px 0px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.div`
  position: absolute;
  width: 100%;
  top: 15.7rem;
  height: 2.5rem;
  font-size: 1.6rem;
  transform: translateY(-100%);
  ${({ theme }) => theme.CusFlex()};
  background-color: ${({ theme }) => theme.CusColor.modalBack};
  color: ${({ theme }) => theme.CusColor.white};
`;
const Sub = styled.div<TSub>`
  height: 2.5rem;
  background-color: ${({ theme }) => theme.CusColor.black};
  padding: 0.5rem 1rem;
  text-align: right;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    color: ${({ isLiked, theme }) => (isLiked ? theme.CusColor.red : theme.CusColor.white)};
  }
`;

export default CardView;
