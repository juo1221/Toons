import { makeAutoObservable } from 'mobx';
import { IRootStore } from './RootStore';
import { TData } from '../api/WebToonData';
import CardStore from './CardStore';
import { toJS } from 'mobx';
class MyListStore {
  private _rootStore: IRootStore;
  private _myList = new Set<CardStore>();
  private _response = new Set<CardStore>();

  constructor(root: IRootStore) {
    makeAutoObservable(this, undefined, { autoBind: true });
    this._rootStore = root;
  }
  update() {
    this._response = this._myList;
  }
  toggle(card: CardStore) {
    if (this._myList.has(card)) {
      this._myList.delete(card);
    } else {
      this._myList.add(card);
    }
  }
  get response() {
    console.log(1);
    return Array.from(this._response);
  }
  get rootStore() {
    return this._rootStore;
  }
}

export default MyListStore;
