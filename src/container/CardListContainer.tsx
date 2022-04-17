import React, { useEffect } from 'react';
import CardListView from '../view/CardListView';
import { observer } from 'mobx-react-lite';
import { useStores } from 'context/RootContext';
import CardStore from 'store/CardStore';
// import { toJS } from 'mobx';

const CardListContainer = observer(() => {
  const { cardListStore, dateStore, platFormStore, myListStore } = useStores();
  const dayNumber = dateStore.dayNumObj.dayNumber;
  const onToggleMyList = (card: CardStore) => {
    myListStore.toggle(card);
  };
  useEffect(() => {
    if (platFormStore.platForm === 'myList') {
      myListStore.update();
    } else {
      cardListStore.load(platFormStore.platForm, dayNumber);
    }
  }, [platFormStore.platForm]);

  return <CardListView cardList={(platFormStore.platForm === 'myList' ? myListStore : cardListStore).response} onToggleMyList={onToggleMyList} />;
});

export default CardListContainer;
