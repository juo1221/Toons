import React from 'react';
import SearchBarView from '../view/SearchBarView';
import { observer } from 'mobx-react-lite';

const SearchBarContainer = observer(() => {
  return <SearchBarView />;
});

export default SearchBarContainer;
