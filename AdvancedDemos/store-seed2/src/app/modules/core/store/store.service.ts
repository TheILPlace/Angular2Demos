import { Injectable } from '@angular/core';
import { Store, Store$, StoreData, UiState } from './store';

import { CloneStoreData, CloneUiState } from './store.utils';

import { Customer } from '../../customers/models/customer';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StoreService {

  private _store: Store;
  store$: Store$;

  constructor() {
    this._store = new Store();
    this.store$ = new Store$(this._store);
  }

  public loadCustomers() {
    const newStoreData = CloneStoreData(this._store);
    const customers = new Array<Customer>();

    const customer = new Customer;
    customer.id = 1;
    customer.name = 'John Doe';
    customer.address = 'the moon';

    const customer2 = new Customer;
    customer2.id = 2;
    customer2.name = 'King Solomon';
    customer2.address = 'Rome';

    customers.push(customer);
    customers.push(customer2);

    newStoreData.customers = customers;

    // update the ui state, that customers have been loaded.
    const newUiState = CloneUiState(this._store);
    newUiState.customersLoaded = true;


    this._store.storeData.next(newStoreData);
    this._store.uiState.next(newUiState);
  }


  addCustomer(customer: Customer) {
    // clone the store Data
    const newStoreData = CloneStoreData(this._store);
    // add the new customer. we clone the input, 
    //  in order not to put a refernce object inside the store
    newStoreData.customers.push(_.cloneDeep(customer));
    // set a new storeData object
    this._store.storeData.next(newStoreData);

  }


  selectCustomer(id: number) {
    const newUiState = CloneUiState(this._store);
    newUiState.selectedCustomerID = id;
    this._store.uiState.next(newUiState);
  }


  getCustomers(): Observable<Array<Customer>> {
    return this._store.storeData.map(data => data.customers);
  }

  getSelectedCustomer(): Observable<Customer> {

      return this._store.uiState.map(data => data.selectedCustomerID)
        .switchMap((selectedCustomerId: number) => {
        return this._store.storeData.map((data: StoreData) =>
          data.customers.filter((customer: Customer) => customer.id === selectedCustomerId)[0]);
      }
      );
  }


}
