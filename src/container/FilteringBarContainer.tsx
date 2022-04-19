import React from 'react';
import FilteringBarView from '../view/FilteringBarView';
import { useStores } from 'context/RootContext';
import { observer } from 'mobx-react-lite';

const FilteringBarContainer = observer(() => {
  const { cardListStore } = useStores();

  const onFilter = (text: string) => {
    cardListStore.setFilteredText(text);
  };
  return <FilteringBarView onFilter={onFilter} filteredText={cardListStore.filteredText.res} />;
});

export default FilteringBarContainer;
