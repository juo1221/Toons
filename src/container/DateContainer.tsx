import React from 'react';
import DateView from '../view/DateView';
import { observer } from 'mobx-react-lite';
import { useStores } from 'context/RootContext';
const DateContainer = observer(() => {
  const { dateStore, cardListStore, platFormStore } = useStores();

  const onSetDayNumber = (value: number) => {
    dateStore.dayNumber = value;
  };
  const onloadList = (day: number) => {
    cardListStore.load(platFormStore.platForm, day);
  };
  return <DateView day={dateStore.day} onSetDayNumber={onSetDayNumber} onloadList={onloadList} />;
});

export default DateContainer;
