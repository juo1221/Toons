import React from 'react';
import DateView from '../view/DateView';
import { observer } from 'mobx-react-lite';
import { useStores } from 'context/RootContext';

const DateContainer = observer(() => {
  const { dateStore } = useStores();
  const { day } = dateStore;

  return <DateView day={day} />;
});

export default DateContainer;
