import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

type TCard = {
  src: string;
  title: string;
};

const CardView: React.FC<TCard> = ({ src, title }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const setOnClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <Card>
      <ImageBox>
        <img src={src} alt="윈드브레이커" />
      </ImageBox>
      <Title>{title}</Title>
      <Sub isLiked={isLiked}>
        <FaHeart onClick={setOnClick} />
      </Sub>
    </Card>
  );
};
type ISub = {
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
const Sub = styled.div<ISub>`
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
