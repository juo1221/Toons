import React from 'react';
import TabView from '../view/TabView';
import { useStores } from 'context/RootContext';
import { observer } from 'mobx-react-lite';
const TabContainer = observer(() => {
  const { dateStore, cardListStore, platFormStore } = useStores();
  const onSetPlatForm = (newPlatForm: string) => {
    platFormStore.platForm = newPlatForm;
  };
  return <TabView onSetPlatForm={onSetPlatForm} platform={platFormStore.platForm} />;
});

export default TabContainer;
