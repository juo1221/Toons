import React, { useCallback } from 'react';
import styled from 'styled-components';
import { ReactComponent as NaverLogo } from '../assets/logo-naver.svg';
import { ReactComponent as KakaoLogo } from '../assets/logo-kakao.svg';
import { ReactComponent as KakaoPageLogo } from '../assets/logo-kakaoPage.svg';
import { FcLike } from 'react-icons/fc';
import { observer } from 'mobx-react-lite';
import { useFont } from '../hooks/font-hooks';

type TTabView = {
  onSetPlatForm: (newPlatForm: string) => void;
  platform: string;
};

const TabView: React.FC<TTabView> = observer(({ onSetPlatForm, platform }) => {
  const BMHANNAAirLoaded = useFont('BMHANNAAir');
  const BMYEONSUNGLoaded = useFont('BMYEONSUNG');
  const arr = [
    { logo: <NaverLogo />, name: '네이버 웹툰' },
    { logo: <KakaoLogo className="k-logo" />, name: '카카오 웹툰' },
    { logo: <KakaoPageLogo />, name: '카카오페이지 웹툰' },
    { logo: <FcLike className="like" />, name: '마이리스트' },
  ];
  const setOnclickTab = (text: string) => {
    switch (text) {
      case '네이버 웹툰':
        text = 'naver';
        break;
      case '카카오 웹툰':
        text = 'kakao';
        break;
      case '카카오페이지 웹툰':
        text = 'kakao-page';
        break;
      case '마이리스트':
        text = 'myList';
        break;
      default:
    }
    onSetPlatForm(text);
  };
  const chageToOriginal = (text: string) => {
    switch (text) {
      case 'naver':
        text = '네이버 웹툰';
        break;
      case 'kakao':
        text = '카카오 웹툰';
        break;
      case 'kakao-page':
        text = '카카오페이지 웹툰';
        break;
      case 'myList':
        text = '마이리스트';
        break;
      default:
    }
    return text;
  };

  const tabList = (): JSX.Element[] => {
    return arr.map((obj, idx) => (
      <Tab
        className="tab"
        key={idx}
        tabState={obj.name === chageToOriginal(platform)}
        onClick={() => setOnclickTab(obj.name)}
        BMHANNAAirLoaded={BMHANNAAirLoaded}>
        {obj.logo}
        <span>{obj.name}</span>
      </Tab>
    ));
  };

  return (
    <Aside id="aside">
      <Title className="aside-title" BMYEONSUNGLoaded={BMYEONSUNGLoaded}>
        Toons
      </Title>
      <Content className="aside-content" BMYEONSUNGLoaded={BMYEONSUNGLoaded}>
        {'네이버, 카카오, 카카오페이지 \n 웹툰을 검색해보세요'}
      </Content>
      {tabList()}
    </Aside>
  );
});

type ITab = {
  tabState: boolean;
  BMHANNAAirLoaded: boolean;
};
type TContent = {
  BMYEONSUNGLoaded: boolean;
};
type TTitle = {
  BMYEONSUNGLoaded: boolean;
};

const Aside = styled.div`
  /* width: 36.4rem; */
  height: 100vh;
  background-color: ${({ theme }) => theme.CusColor.black};

  svg {
    border-radius: 50%;
    background-color: white;
    width: 35px;
    height: 35px;
    @media screen and (max-width: 1400px) {
      width: 30px;
      height: 30px;
    }
  }
  .k-logo {
    border: 1px solid white;
  }
  .like {
    background-color: white;
  }
`;
const Title = styled.div<TTitle>`
  width: 15rem;
  height: 6.1rem;
  font-weight: 700;
  font-size: 5rem;
  margin: auto;
  text-align: center;
  margin-top: 4.1rem;
  color: ${({ theme }) => theme.CusColor.yellow};
  opacity: ${({ BMYEONSUNGLoaded }) => (BMYEONSUNGLoaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  @media screen and (max-width: 1400px) {
    font-size: 4rem;
  }
`;
const Content = styled.p<TContent>`
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
  opacity: ${({ BMYEONSUNGLoaded }) => (BMYEONSUNGLoaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  @media screen and (max-width: 1400px) {
    font-size: 1.3rem;
  }
`;

const Tab = styled.div<ITab>`
  min-width: 235px;
  height: 61px;
  background: ${({ tabState, theme }) => (tabState ? theme.CusColor.yellow : theme.CusColor.black)};
  border-radius: 5px;
  font-size: 2.5rem;
  padding: 1.857rem 2.7rem;
  margin: auto;
  cursor: pointer;
  margin-top: 5.3rem;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.CusColor.white};
  ${({ theme }) => theme.CusFlex('none')}
  span {
    margin-left: 1.2rem;
    opacity: ${({ BMHANNAAirLoaded }) => (BMHANNAAirLoaded ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
  }
  @media screen and (max-width: 1400px) {
    font-size: 2rem;
  }
`;
export default TabView;
