import React from 'react';
import DateView from '../view/DateView';
import { observer } from 'mobx-react-lite';
import { useStores } from 'context/RootContext';
const DateContainer = observer(() => {
  const { dateStore, webToonDataStore, platFormStore } = useStores();

  const onSetDayNumber = (value: number) => {
    dateStore.dayNumber = value;
  };
  const onGetList = (day: number) => {
    webToonDataStore.getList(platFormStore.platForm, day);
  };
  return <DateView day={dateStore.day} onSetDayNumber={onSetDayNumber} onGetList={onGetList} />;
});

export default DateContainer;
