import { makeAutoObservable, runInAction } from 'mobx';
import { IRootStore } from './RootStore';
import WebToonData from '../api/WebToonData';
import CardStore from './CardStore';
import { err } from 'utils/util';
import { TData } from '../api/WebToonData';
import { toJS } from 'mobx';

type DataId = string;
type SearchError = {
  error: string;
  message: string;
  statusCode: number;
};
class CardListStore {
  private _rootStore: IRootStore;
  private _webToonData = WebToonData;
  private _listMap = new Map<string, Set<CardStore> | CardStore[]>();
  private _idMap = new Map<DataId, CardStore>();
  private _response: Set<CardStore> | CardStore[] = new Set<CardStore>();
  private _filteredText: string = '';

  constructor(root: IRootStore) {
    console.log('Created: CardListStore!');
    this._rootStore = root;
    makeAutoObservable(this, undefined, { autoBind: true });
  }
  async load(platform: string = 'naver', day: number) {
    this._response = [];
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
  sort(platform: string, day: number, criteria: string) {
    try {
      if (!this._listMap.has(`${platform}${day}`)) err(criteria);
      const cardList = Array.from(this._listMap.get(`${platform}${day}`)!);
      if (criteria === '이름 순') {
        this._response = cardList.sort((prev, curr) => (curr.data.info.title > prev.data.info.title ? -1 : 1));
      } else {
        this._response = [...cardList.filter((card) => card.isLiked.isLiked), ...cardList.filter((card) => !card.isLiked.isLiked)];
      }
      this._listMap.set(`${platform}${day}`, this._response);
    } catch (err) {
      this.rootStore.myListStore.sort(criteria);
    }
  }
  async search(name: string) {
    const res: TData[] | SearchError = await this._webToonData.getList(`search?keyword=${name}`);
    if (!Array.isArray(res)) {
      const ErrorRes: SearchError = res;
      return ErrorRes.message;
    } else {
      return res;
    }
  }
  setSearchData(searchData: TData) {
    this._rootStore.platFormStore.setPlatForm(searchData.service);
    this._rootStore.dateStore.setDayNumber(searchData.week[0]);
    this.setFilteredText(searchData.title);
  }
  setFilteredText(text: string) {
    this._filteredText = text;
  }
  get rootStore() {
    return this._rootStore;
  }
  get response() {
    return Array.from(this._response);
  }
  get filteredText() {
    return { res: this._filteredText };
  }
}

export default CardListStore;
