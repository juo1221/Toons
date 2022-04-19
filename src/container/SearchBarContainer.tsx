import React, { useState } from 'react';
import SearchBarView from '../view/SearchBarView';
import { observer } from 'mobx-react-lite';
import { useStores } from '../context/RootContext';
import { TData } from '../api/WebToonData';

const SearchBarContainer = observer(() => {
  const { cardListStore } = useStores();
  const onSearch = (text: string) => {
    return cardListStore.search(text);
  };
  const onSetSearchData = (data: TData) => {
    cardListStore.setSearchData(data);
  };
  return <SearchBarView onSearch={onSearch} onSetSearchData={onSetSearchData} />;
});

export default SearchBarContainer;
