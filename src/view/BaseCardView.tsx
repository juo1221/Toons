import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { TData } from '../api/WebToonData';
import { observer } from 'mobx-react-lite';
import CardStore from 'store/CardStore';

export type TCard = {
  info: TData & Like;
  onToggleList: () => void;
  cardStore: CardStore;
  onToggleMyList: (card: CardStore) => void;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
};
type Like = {
  isLiked: boolean;
};

const BaseCardView: React.FC<TCard> = observer(({ info, onToggleList, onToggleMyList, cardStore, setIsHover }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<NodeJS.Timeout>();

  const setOnClick = () => {
    onToggleList();
    onToggleMyList(cardStore);
  };

  const setOnHover = () => {
    timeRef.current = setTimeout(() => {
      cardRef.current?.classList.add('hover');
      setIsHover(true);
    }, 1000);
  };
  const setOnLeave = () => {
    clearTimeout(timeRef.current as NodeJS.Timeout);
    cardRef.current?.classList.remove('hover');
    setIsHover(false);
  };
  return (
    <Card ref={cardRef} onMouseEnter={setOnHover} onMouseLeave={setOnLeave}>
      <ImageBox href={info.url}>
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
  width: 16rem;
  height: 18.5rem;
  position: relative;
  ${({ theme }) => theme.CusFlex('none', 'none', 'column')}
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
`;

const ImageBox = styled.a`
  height: 16rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px 5px 0px 0px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.span`
  position: absolute;
  width: 100%;
  top: 16rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.CusColor.titleBack};
  transform: translateY(-100%);
  font-size: 1.7rem;
  color: ${({ theme }) => theme.CusColor.white};
  text-align: center;
  padding: 0.75rem 2rem;
  ${({ theme }) => theme.hideText()}
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

export default BaseCardView;
