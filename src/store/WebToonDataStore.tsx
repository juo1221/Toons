import { makeAutoObservable, runInAction } from 'mobx';
import { IRootStore } from './RootStore';
import WebToonData from '../api/WebToonData';
import { TData } from '../api/WebToonData';

class WebToonDataStore {
  _rootStore: IRootStore;
  _webToonData = WebToonData;
  _response: TData[] = [];
  constructor(root: IRootStore) {
    console.log('Created: WebToonDataStore!');
    this._rootStore = root;
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  async getList(platform: string = 'naver', day: number) {
    const response = await this._webToonData.getList(`${platform}/week?day=${day - 1 < 0 ? 6 : day - 1}`);
    runInAction(() => {
      console.log(1);
      this._response = response;
    });
  }
  search(name: string) {
    return this._webToonData.getList(`search?keyword=${name}`);
  }
}

export default WebToonDataStore;
