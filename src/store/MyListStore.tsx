import { makeAutoObservable } from 'mobx';
import { IRootStore } from './RootStore';
import { TData } from '../api/WebToonData';
import CardStore from './CardStore';
import { toJS } from 'mobx';
class MyListStore {
  private _rootStore: IRootStore;
  private _response: CardStore[] = [];
  private _set = new Set<CardStore>();

  constructor(root: IRootStore) {
    makeAutoObservable(this, undefined, { autoBind: true });
    this._rootStore = root;
  }
  get rootStore() {
    return this._rootStore;
  }
  getList() {
    this._response = Array.from(this._set);
  }
  toggle(info: TData) {
    // info.isLiked = !info.isLiked;
    // if (this._set.has(info)) {
    //   this._set.delete(info);
    // } else {
    //   this._set.add(info);
    // }
  }
  get response() {
    return [...this._response];
  }
}

export default MyListStore;
