import React, { useEffect } from 'react';
import CardListView from '../view/CardListView';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { useStores } from 'context/RootContext';

const CardListContainer = observer(() => {
  const {
    webToonDataStore,
    dateStore: { dayNumber },
  } = useStores();
  useEffect(() => {
    console.log(dayNumber);
    webToonDataStore.getList('naver', dayNumber);
  }, []);
  return <CardListView list={toJS(webToonDataStore._response)} />;
});

export default CardListContainer;
