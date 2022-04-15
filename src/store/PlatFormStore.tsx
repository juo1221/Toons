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
  get platForm(): string {
    return this._platForm;
  }
  set platForm(value: string) {
    this._platForm = value;
  }
}

export default PlatFormStore;
