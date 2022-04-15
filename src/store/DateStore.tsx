import { makeAutoObservable } from 'mobx';
import { IRootStore } from './RootStore';

class DateStore {
  _rootStore: IRootStore;
  _date: Date = new Date();

  constructor(root: IRootStore) {
    makeAutoObservable(this, undefined, { autoBind: true });
    this._rootStore = root;
  }
  get day(): string {
    return ['일', '월', '화', '수', '목', '금', '토'][this._date.getDay()];
  }
  get dayNumber(): number {
    return this._date.getDay();
  }
}

export default DateStore;
