import { makeAutoObservable, runInAction } from 'mobx';
import { IRootStore } from './RootStore';
import WebToonData from '../api/WebToonData';
import { TData } from '../api/WebToonData';

class WebToonDataStore {
  _rootStore: IRootStore;
  _webToonData = WebToonData;
  _response: TData[] = [];
  _map = new Map();
  constructor(root: IRootStore) {
    console.log('Created: WebToonDataStore!');
    this._rootStore = root;
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  async getList(platform: string = 'naver', day: number) {
    if (this._map.has(day)) {
      this._response = this._map.get(day);
    } else {
      const response = await this._webToonData.getList(day === 7 ? `${platform}/finished` : `${platform}/week?day=${day}`);
      this._map.set(day, response);
      runInAction(() => {
        console.log(1);
        this._response = response;
      });
    }
  }
  search(name: string) {
    return this._webToonData.getList(`search?keyword=${name}`);
  }
}

export default WebToonDataStore;
