import { makeAutoObservable, runInAction } from 'mobx';
import { IRootStore } from './RootStore';
import WebToonData from '../api/WebToonData';
import CardStore from './CardStore';
import { TData } from '../api/WebToonData';
import { toJS } from 'mobx';

class CardListStore {
  private _rootStore: IRootStore;
  private _webToonData = WebToonData;
  private _listMap = new Map();
  private _response: CardStore[] = [];

  constructor(root: IRootStore) {
    console.log('Created: CardListStore!');
    this._rootStore = root;
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  async load(platform: string = 'naver', day: number) {
    if (this._listMap.has(`${platform}${day}`)) {
      this._response = this._listMap.get(`${platform}${day}`);
    } else {
      try {
        const response = await this._webToonData.getList(day === 7 ? `${platform}/finished` : `${platform}/week?day=${day}`);
        const set = new Set();
        response.forEach((card) => {
          set.add(new CardStore(card));
          this._listMap.set(`${platform}${day}`, set);
        });
        runInAction(() => {
          this._response = this._listMap.get(`${platform}${day}`);
        });
      } catch (e) {
        console.log(e, `네트워크 요청 에러! params : ${day === 7 ? `${platform}/finished` : `${platform}/week?day=${day}`}`);
      }
    }
  }
  /* 변경 필요 */
  search(name: string) {
    return this._webToonData.getList(`search?keyword=${name}`);
  }
  get rootStore() {
    return this._rootStore;
  }
  get response() {
    return [...this._response];
  }
}

export default CardListStore;
