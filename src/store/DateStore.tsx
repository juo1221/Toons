import { makeAutoObservable } from 'mobx';
import { IRootStore } from './RootStore';

class DateStore {
  private _rootStore: IRootStore;
  private _dayNumber: number = new Date().getDay() - 1 < 0 ? 6 : new Date().getDay() - 1;

  constructor(root: IRootStore) {
    makeAutoObservable(this, undefined, { autoBind: true });
    this._rootStore = root;
  }
  get day(): string {
    return ['월', '화', '수', '목', '금', '토', '일'][this._dayNumber];
  }
  get dayNumber(): number {
    return this._dayNumber;
  }
  set dayNumber(value: number) {
    this._dayNumber = value;
  }
}

export default DateStore;
