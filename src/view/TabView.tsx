import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as NaverLogo } from '../assets/logo-naver.svg';
import { ReactComponent as KakaoLogo } from '../assets/logo-kakao.svg';
import { ReactComponent as KakaoPageLogo } from '../assets/logo-kakaoPage.svg';
import { FcLike } from 'react-icons/fc';
const TabView = () => {
  const [clickedText, setClickedText] = useState('네이버');
  const arr = [
    { logo: <NaverLogo />, name: '네이버' },
    { logo: <KakaoLogo className="k-logo" />, name: '카카오' },
    { logo: <KakaoPageLogo />, name: '카카오페이지' },
    { logo: <FcLike className="like" />, name: '즐겨찾기' },
  ];
  const setOnclickTab = (text: any) => {
    setClickedText(text);
  };

  const tabList = (): JSX.Element[] => {
    return arr.map((obj, idx) => (
      <Tab key={idx} tabState={obj.name === clickedText} onClick={() => setOnclickTab(obj.name)}>
        {obj.logo}
        <span>{obj.name}</span>
      </Tab>
    ));
  };
  return (
    <Aside>
      <Title>Toons</Title>
      <Content>{'네이버, 카카오, 카카오페이지 \n 웹툰을 검색해보세요'}</Content>
      {tabList()}
    </Aside>
  );
};

type ITab = {
  tabState: boolean;
};

const Aside = styled.div`
  width: 36.4rem;
  height: 96rem;
  background-color: ${({ theme }) => theme.CusColor.black};
  svg {
    border-radius: 50%;
    background-color: white;
    width: 35px;
    height: 35px;
  }
  .k-logo {
    border: 1px solid white;
  }
  .like {
    background-color: white;
  }
`;
const Title = styled.div`
  width: 15rem;
  height: 6.1rem;
  font-weight: 700;
  font-size: 5rem;
  margin: auto;
  margin-top: 4.1rem;
  color: ${({ theme }) => theme.CusColor.yellow};
`;
const Content = styled.p`
  width: 20.7rem;
  height: 3.4rem;
  font-weight: 400;
  font-size: 1.6rem;
  margin: auto;
  margin-top: 2.4rem;
  margin-bottom: 7.2rem;
  text-align: center;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.CusColor.gray};
`;

const Tab = styled.div<ITab>`
  width: 330px;
  height: 61px;
  background: ${({ tabState, theme }) => (tabState ? theme.CusColor.yellow : theme.CusColor.black)};
  border-radius: 5px;
  font-size: 2.5rem;
  padding: 1.857rem 2.7rem;
  margin: auto;
  cursor: pointer;
  margin-top: 5.3rem;
  color: ${({ theme }) => theme.CusColor.white};
  ${({ theme }) => theme.CusFlex('none')}
  span {
    margin-left: 1.2rem;
  }
`;
export default TabView;
