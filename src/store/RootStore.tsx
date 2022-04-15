import DateStore from './DateStore';
export interface IRootStore {
  get _dateStore(): DateStore;
}
class RootStore implements IRootStore {
  _dateStore: DateStore;
  constructor() {
    this._dateStore = new DateStore(this);
  }
  get dateStore() {
    return this._dateStore;
  }
}

export default new RootStore();
