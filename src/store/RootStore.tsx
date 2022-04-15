import DateStore from './DateStore';
import WebToonDataStore from './WebToonDataStore';
import PlatFormStore from './PlatFormStore';
export interface IRootStore {
  get dateStore(): DateStore;
  get webToonDataStore(): WebToonDataStore;
  get platFormStore(): PlatFormStore;
}
class RootStore implements IRootStore {
  _dateStore: DateStore;
  _webToonDataStore: WebToonDataStore;
  _platFormStore: PlatFormStore;
  constructor() {
    this._dateStore = new DateStore(this);
    this._webToonDataStore = new WebToonDataStore(this);
    this._platFormStore = new PlatFormStore(this);
  }
  get dateStore() {
    return this._dateStore;
  }
  get webToonDataStore() {
    return this._webToonDataStore;
  }
  get platFormStore() {
    return this._platFormStore;
  }
}

export default new RootStore();
