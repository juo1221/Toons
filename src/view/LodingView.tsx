import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

type TLodingView = {
  text?: string;
  backgroundColor?: string;
  delay: number;
};
const LodingView: React.FC<TLodingView> = ({ backgroundColor = '#000000', text, delay }) => {
  return (
    <Card backgroundColor={backgroundColor} delay={delay}>
      <ImageBox className="loding-image">{text}</ImageBox>
      <Title>...</Title>
      <Sub>
        <FaHeart />
      </Sub>
    </Card>
  );
};

type TCard = {
  delay: number;
  backgroundColor: string;
};

const Card = styled.div<TCard>`
  position: relative;
  width: 16rem;
  height: 18.5rem;
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
  background-color: ${({ backgroundColor }) => backgroundColor};
  animation: ${({ delay }) => `6s ease ${delay}s infinite flow`};
  ${({ theme }) => theme.CusFlex('none', 'none', 'column')};
  @keyframes flow {
    0% {
      transform: translateY(-10%) scale(1);
    }
    20% {
      transform: translateX(-10%);
    }
    40% {
      transform: translateY(10%) scale(1.1);
    }
    60% {
      transform: translateX(10%);
    }
    100% {
      transform: translateY(-10%) scale(1);
    }
  }
`;

const ImageBox = styled.div`
  height: 16rem;
  overflow: hidden;
  border-radius: 5px 5px 0px 0px;
  font-size: 5rem;
  font-weight: bold;
  color: #51f9b8;
  ${({ theme }) => theme.CusFlex()};
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(65, 46, 46, 0.1);
    }
    50% {
      background-color: rgb(165, 165, 165, 0.2);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
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
const Sub = styled.div`
  height: 2.5rem;
  background-color: ${({ theme }) => theme.CusColor.black};
  padding: 0.5rem 1rem;
  text-align: right;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.CusColor.white};
  }
`;

export default LodingView;
