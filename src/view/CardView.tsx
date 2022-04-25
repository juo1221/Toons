import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { TData } from '../api/WebToonData';
import { observer } from 'mobx-react-lite';
import CardStore from 'store/CardStore';
import BaseCardView from './BaseCardView';
import CardHoverView from './CardHoverView';

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
  const [isHover, setIsHover] = useState(false);
  return (
    <Wrapper id="card-list">
      {isHover ? (
        <>
          <CardHoverView info={info} onToggleList={onToggleList} onToggleMyList={onToggleMyList} cardStore={cardStore} setIsHover={setIsHover} />
        </>
      ) : (
        <>
          <BaseCardView info={info} onToggleList={onToggleList} onToggleMyList={onToggleMyList} cardStore={cardStore} setIsHover={setIsHover} />
        </>
      )}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: relative;
  width: 16rem;
  height: 18.5rem;
`;

export default CardView;
