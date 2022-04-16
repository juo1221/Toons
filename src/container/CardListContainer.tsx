import React, { useEffect } from 'react';
import CardListView from '../view/CardListView';
import { observer } from 'mobx-react-lite';
import { useStores } from 'context/RootContext';
import { TData } from '../api/WebToonData';
// import { toJS } from 'mobx';

const CardListContainer = observer(() => {
  const { cardListStore, dateStore, platFormStore, myListStore } = useStores();
  const dayNumber = dateStore.dayNumObj.dayNumber;

  useEffect(() => {
    if (platFormStore.platForm === 'myList') {
      // myListStore.update();
    } else {
      cardListStore.load(platFormStore.platForm, dayNumber);
    }
  }, [platFormStore.platForm]);

  return <CardListView cardList={(platFormStore.platForm === 'myList' ? myListStore : cardListStore).response} />;
});

export default CardListContainer;
