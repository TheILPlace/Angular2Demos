import { StoreData, UiState, Store } from './store';
import * as _ from 'lodash';

  export function CloneStoreData(store: Store): StoreData {
    return _.cloneDeep(store.storeData.getValue());
  }

  export function CloneUiState(store: Store): UiState {
    return _.cloneDeep(store.uiState.getValue());
  }
