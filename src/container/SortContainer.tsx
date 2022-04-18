import React from 'react';
import SortView from '../view/SortView';
import { useStores } from '../context/RootContext';
import { observer } from 'mobx-react-lite';
const SortContainer = observer(() => {
  const { dateStore, cardListStore, platFormStore } = useStores();
  const onSort = (criteria: string) => {
    cardListStore.sort(platFormStore.platForm, dateStore.dayNum.result, criteria);
  };
  return <SortView onSort={onSort} />;
});

export default SortContainer;
