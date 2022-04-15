import React, { useEffect } from 'react';
import CardListView from '../view/CardListView';
import { observer } from 'mobx-react-lite';
import { useStores } from 'context/RootContext';
// import { toJS } from 'mobx';

const CardListContainer = observer(() => {
  const {
    webToonDataStore,
    dateStore: { dayNumber },
    platFormStore,
  } = useStores();

  useEffect(() => {
    webToonDataStore.getList(platFormStore.platForm, dayNumber);
  }, [platFormStore.platForm]);

  return <CardListView list={webToonDataStore._response} />;
});

export default CardListContainer;
