import { makeAutoObservable, runInAction } from 'mobx';
import { IRootStore } from './RootStore';
import WebToonData from '../api/WebToonData';
import CardStore from './CardStore';
import { TData } from '../api/WebToonData';
import { toJS } from 'mobx';

type DataId = string;
class CardListStore {
  private _rootStore: IRootStore;
  private _webToonData = WebToonData;
  private _listMap = new Map<string, Set<CardStore>>();
  private _idMap = new Map<DataId, CardStore>();
  private _response = new Set<CardStore>();

  constructor(root: IRootStore) {
    console.log('Created: CardListStore!');
    this._rootStore = root;
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  async load(platform: string = 'naver', day: number) {
    if (this._listMap.has(`${platform}${day}`)) {
      this._response = this._listMap.get(`${platform}${day}`)!;
    } else {
      try {
        const response = await this._webToonData.getList(day === 7 ? `${platform}/finished` : `${platform}/week?day=${day}`);
        const set = new Set<CardStore>();
        response.forEach((card) => {
          if (!this._idMap.has(card._id)) {
            this._idMap.set(card._id, new CardStore(card));
          }
          set.add(this._idMap.get(card._id)!);
          this._listMap.set(`${platform}${day}`, set);
        });
        runInAction(() => {
          this._response = this._listMap.get(`${platform}${day}`)!;
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
    return Array.from(this._response);
  }
}

export default CardListStore;
