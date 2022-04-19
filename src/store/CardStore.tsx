import { makeAutoObservable, runInAction } from 'mobx';
import { IRootStore } from './RootStore';
import WebToonData from '../api/WebToonData';
import { TData } from '../api/WebToonData';
import CardListStore from './CardListStore';
import { toJS } from 'mobx';

class CardStore {
  private _webToonData = WebToonData;
  private _isLiked = false;

  constructor(private _data: TData) {
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  toggle() {
    this._isLiked = !this._isLiked;
  }
  get isLidkedStore(): CardStore | null {
    return this._isLiked ? this : null;
  }
  get isLiked() {
    return { isLiked: this._isLiked };
  }
  get data() {
    return { info: this._data };
  }
}

export default CardStore;
