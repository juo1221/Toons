import { makeAutoObservable } from 'mobx';
import { IRootStore } from './RootStore';
import { TData } from '../api/WebToonData';
import CardStore from './CardStore';
import { toJS } from 'mobx';
import { err } from 'utils/util';
class MyListStore {
  private _rootStore: IRootStore;
  private _myList = new Set<CardStore>();
  private _response: Set<CardStore> = new Set<CardStore>();

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
  sort(criteria: string) {
    if (criteria !== '이름 순') err(`invalid criteria: ${criteria}`);
    this._myList = new Set([...this._myList].sort((prev, curr) => (curr.data.info.title > prev.data.info.title ? -1 : 1)));
    this._response = this._myList;
  }
  get response() {
    return Array.from(this._response);
  }
  get rootStore() {
    return this._rootStore;
  }
}

export default MyListStore;
