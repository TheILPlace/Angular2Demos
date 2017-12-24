import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { Customer } from '../models/customer';

import * as fromCustomers from '../store/reducers';
import * as fromCustomersActions from '../store/customers/customers-actions';

@Injectable()
export class CustomersDataService {

    constructor(private store: Store<fromCustomers.CustomersState>,
        private httpService: HttpService) {
    }

    getIsCustomersLoaded() {
        return this.store.select(fromCustomers.getIsCustomersLoaded);
    }

    getCustomersList() {
        return this.store.select(fromCustomers.getCustomersList);
    }

    getSelectedCustomer() {
        return this.store.select(fromCustomers.getSelectedCustomer);
    }


    loadCustomersAction() {
        this.store.dispatch(new fromCustomersActions.LoadAction());
    }

    selectCustomerAction(id: number) {
        this.store.dispatch(new fromCustomersActions.SelectAction(id));
    }

    addCustomerAction(customer: Customer) {
        this.store.dispatch(new fromCustomersActions.AddAction(customer));
    }

    loadCustomers(): Observable<Customer[]> {
        // return this.httpService.get('');
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
        return Observable.of(customers);


    }

};
