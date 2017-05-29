import { Customer } from '../../customers/models/customer';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class StoreData {
    customers: Customer[];
}

export class UiState {
    editMode: boolean;
    customersLoaded: boolean;
    selectedCustomerID: number;

}

const INITIAL_STORE_DATA: StoreData = {
    customers: new Array<Customer>()

};

const INITIAL_UI_STATE: UiState = {
    editMode: false,
    customersLoaded: false,
    selectedCustomerID: null

};


export class Store {
    storeData: BehaviorSubject<StoreData>;
    uiState: BehaviorSubject<UiState>;
    constructor() {
        this.storeData = new BehaviorSubject<StoreData>(INITIAL_STORE_DATA);
        this.uiState = new BehaviorSubject<UiState>(INITIAL_UI_STATE);
    }

}

export class Store$ {
    storeData: Observable<StoreData>;
    uiState: Observable<UiState>;
    constructor(store: Store) {
        this.storeData = store.storeData.asObservable();
        this.uiState = store.uiState.asObservable();
    }
}
