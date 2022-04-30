import React, { useState, Suspense, lazy } from 'react';
import styled from 'styled-components';
import { TData } from '../api/WebToonData';
import { observer } from 'mobx-react-lite';
import CardStore from 'store/CardStore';
import BaseCardView from './BaseCardView';
const LazyCardComponent = lazy(() => import('./CardHoverView'));

type TCard = {
  info: TData & Like;
  onToggleList: () => void;
  cardStore: CardStore;
  onToggleMyList: (card: CardStore) => void;
  platForm: string;
};

type Like = {
  isLiked: boolean;
};

const CardView: React.FC<TCard> = observer(({ info, onToggleList, onToggleMyList, cardStore, platForm }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrapper id="card-list">
      <Suspense fallback={null}>
        {isHover ? (
          <LazyCardComponent info={info} onToggleList={onToggleList} onToggleMyList={onToggleMyList} cardStore={cardStore} setIsHover={setIsHover} />
        ) : (
          <BaseCardView
            info={info}
            platForm={platForm}
            onToggleList={onToggleList}
            onToggleMyList={onToggleMyList}
            cardStore={cardStore}
            setIsHover={setIsHover}
          />
        )}
      </Suspense>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: relative;
  width: 16rem;
  height: 18.5rem;
  ${({ theme }) => theme.CusFlex()};
`;

export default CardView;
