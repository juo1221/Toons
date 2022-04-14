import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { BiRun } from 'react-icons/bi';
const CardHoverView = () => {
  return (
    <Container>
      <CardImg>
        <img src="/image.jpeg" alt="" />
      </CardImg>
      <Content>
        <Infos>
          <Info>
            <p>Title :</p>
            <p>Author : </p>
          </Info>
          <FaHeart />
        </Infos>
        <Buttons>
          <StateBtns>
            <StateBtn>Up</StateBtn>
            <StateBtn>19</StateBtn>
            <StateBtn>New</StateBtn>
            <StateBtn>Rest</StateBtn>
          </StateBtns>
          <ViewBtn>
            <BiRun />
          </ViewBtn>
        </Buttons>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: 35rem;
  ${({ theme }) => theme.CusFlex('none', 'none', 'column')};
`;
const CardImg = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 5px 5px 0px 0px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 10.179rem;
  padding: 1.5rem 1.5rem;
  background-color: ${({ theme }) => theme.CusColor.black};
  ${({ theme }) => theme.CusFlex('space-between', 'none', 'column')};
  color: ${({ theme }) => theme.CusColor.white};
`;
const Infos = styled.div`
  ${({ theme }) => theme.CusFlex('space-between', 'flex-start')};
  svg {
    font-size: 1.5rem;
  }
`;
const Info = styled.div`
  font-size: 1.4rem;
  height: 3.2rem;
  gap: 0.5rem;
  ${({ theme }) => theme.CusFlex('space-between', 'flex-start', 'column')};
`;
const Buttons = styled.div`
  width: 100%;
  ${({ theme }) => theme.CusFlex('space-between')};
  background-color: ${({ theme }) => theme.CusColor.black};
`;
const StateBtns = styled.div`
  width: 14.272rem;
  height: 1.674rem;
  ${({ theme }) => theme.CusFlex('space-between')};
`;
const StateBtn = styled.button`
  width: 3.4rem;
  height: 1.8rem;
  font-size: 1.1rem;
  padding-top: 0.3rem;
  border-radius: 5px;
  ${({ theme }) => theme.CusFlex()};
  background-color: ${({ theme }) => theme.CusColor.red};
  color: ${({ theme }) => theme.CusColor.white};
`;
const ViewBtn = styled.button`
  width: 7rem;
  height: 3rem;
  border: 3px solid #febf0c;
  border-radius: 6rem;
  font-size: 2rem;
  ${({ theme }) => theme.CusFlex()};
  background-color: ${({ theme }) => theme.CusColor.white};
  color: ${({ theme }) => theme.CusColor.gray};
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.CusColor.black};
  }
`;

export default CardHoverView;
