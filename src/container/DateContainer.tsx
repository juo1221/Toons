import React from 'react';
import DateView from '../view/DateView';
import { observer } from 'mobx-react-lite';
import { useStores } from 'context/RootContext';
const DateContainer = observer(() => {
  const { dateStore } = useStores();

  const onSetDayNumber = (value: number) => {
    dateStore.setDayNumber(value);
  };

  return <DateView day={dateStore.day} onSetDayNumber={onSetDayNumber} />;
});

export default DateContainer;
