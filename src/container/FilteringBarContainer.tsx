import React from 'react';
import FilteringBarView from '../view/FilteringBarView';
import { useStores } from 'context/RootContext';

const FilteringBarContainer = () => {
  const { cardListStore } = useStores();

  const onFilter = (text: string) => {
    cardListStore.setFilteredText(text);
  };
  return <FilteringBarView onFilter={onFilter} />;
};

export default FilteringBarContainer;
