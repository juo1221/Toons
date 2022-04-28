import axios from 'axios';

export type TData = {
  additional: Additional;
  author: string;
  img: string;
  service: string;
  title: string;
  url: string;
  week: number[];
  _id: string;
};

type Additional = {
  new: boolean;
  adult: boolean;
  rest: boolean;
  up: boolean;
};

interface IWebToonData {
  getList(params: string): Promise<TData[]>;
}

class WebToonData implements IWebToonData {
  constructor() {}
  async getList(params: string): Promise<TData[]> {
    const loadedArr: TData[] = (await axios.get(`https://korea-webtoon-api.herokuapp.com/${params}`)).data;
    return loadedArr;
  }
}

export default new WebToonData();
