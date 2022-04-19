import { makeAutoObservable } from 'mobx';
import { IRootStore } from './RootStore';

class PlatFormStore {
  private _rootStore: IRootStore;
  private _platForm: string = 'naver';

  constructor(root: IRootStore) {
    makeAutoObservable(this, undefined, { autoBind: true });
    this._rootStore = root;
  }
  get rootStore() {
    return this._rootStore;
  }
  get platForm() {
    return { res: this._platForm };
  }
  setPlatForm(value: string) {
    this._platForm = value;
  }
}

export default PlatFormStore;
