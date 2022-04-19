import React, { useEffect } from 'react';
import CardListView from '../view/CardListView';
import { observer } from 'mobx-react-lite';
import { useStores } from 'context/RootContext';
import CardStore from 'store/CardStore';
// import { toJS } from 'mobx';

const CardListContainer = observer(() => {
  const { cardListStore, dateStore, platFormStore, myListStore } = useStores();
  const dayNumber = dateStore.DayNumber.result;
  const onToggleMyList = (card: CardStore) => {
    myListStore.toggle(card);
  };

  useEffect(() => {
    if (platFormStore.platForm.res === 'myList') {
      myListStore.update();
    } else {
      cardListStore.load(platFormStore.platForm.res, dayNumber);
    }
  }, [platFormStore.platForm, dateStore.DayNumber.result]);
  return (
    <CardListView
      cardList={(platFormStore.platForm.res === 'myList' ? myListStore : cardListStore).response}
      onToggleMyList={onToggleMyList}
      filtedText={cardListStore.filteredText.res}
    />
  );
});

export default CardListContainer;
