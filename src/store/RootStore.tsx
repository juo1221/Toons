import DateStore from './DateStore';
import WebToonDataStore from './WebToonDataStore';
export interface IRootStore {
  get _dateStore(): DateStore;
}
class RootStore implements IRootStore {
  _dateStore: DateStore;
  _webToonDataStore: WebToonDataStore;
  constructor() {
    this._dateStore = new DateStore(this);
    this._webToonDataStore = new WebToonDataStore(this);
  }
  get dateStore() {
    return this._dateStore;
  }
  get webToonDataStore() {
    return this._webToonDataStore;
  }
}

export default new RootStore();
