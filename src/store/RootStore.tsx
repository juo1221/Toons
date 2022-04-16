import DateStore from './DateStore';
import CardListStore from './CardListStore';
import PlatFormStore from './PlatFormStore';
import MyListStore from './MyListStore';

export interface IRootStore {
  get dateStore(): DateStore;
  get cardListStore(): CardListStore;
  get platFormStore(): PlatFormStore;
  get myListStore(): MyListStore;
}
class RootStore implements IRootStore {
  _dateStore: DateStore;
  _cardListStore: CardListStore;
  _platFormStore: PlatFormStore;
  _myListStore: MyListStore;

  constructor() {
    this._dateStore = new DateStore(this);
    this._cardListStore = new CardListStore(this);
    this._platFormStore = new PlatFormStore(this);
    this._myListStore = new MyListStore(this);
  }
  get dateStore() {
    return this._dateStore;
  }
  get cardListStore() {
    return this._cardListStore;
  }
  get platFormStore() {
    return this._platFormStore;
  }
  get myListStore() {
    return this._myListStore;
  }
}

export default new RootStore();
