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
    if (this._map.has(`${platform}${day}`)) {
      this._response = this._map.get(`${platform}${day}`);
    } else {
      try {
        const response = await this._webToonData.getList(day === 7 ? `${platform}/finished` : `${platform}/week?day=${day}`);
        this._map.set(`${platform}${day}`, response);
        runInAction(() => {
          this._response = response;
        });
      } catch (e) {
        console.log(e, `네트워크 요청 에러! params : ${day === 7 ? `${platform}/finished` : `${platform}/week?day=${day}`}`);
      }
    }
  }
  search(name: string) {
    return this._webToonData.getList(`search?keyword=${name}`);
  }
  get rootStore() {
    return this._rootStore;
  }
}

export default WebToonDataStore;
