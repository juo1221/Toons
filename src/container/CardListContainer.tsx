import React, { useEffect } from 'react';
import CardListView from '../view/CardListView';
import { observer } from 'mobx-react-lite';
import { useStores } from 'context/RootContext';
// import { toJS } from 'mobx';

const CardListContainer = observer(() => {
  const {
    webToonDataStore,
    dateStore: { dayNumber },
  } = useStores();
  useEffect(() => {
    webToonDataStore.getList('naver', dayNumber);
  }, []);
  return <CardListView list={webToonDataStore._response} />;
});

export default CardListContainer;
