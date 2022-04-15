import React from 'react';
import DateView from '../view/DateView';
import { observer } from 'mobx-react-lite';
import { useStores } from 'context/RootContext';
const DateContainer = observer(() => {
  const { dateStore, webToonDataStore } = useStores();
  const onSetDayNumber = (value: number) => {
    dateStore.dayNumber = value;
  };
  const onGetList = (platform: string, day: number) => {
    webToonDataStore.getList(platform, day);
  };
  return <DateView day={dateStore.day} onSetDayNumber={onSetDayNumber} onGetList={onGetList} />;
});

export default DateContainer;
