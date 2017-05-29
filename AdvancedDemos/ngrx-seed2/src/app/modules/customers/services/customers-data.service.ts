import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../models/customer';
import * as fromRoot from '../../../store/reducers';
import * as fromRootActions from '../../../store/customers/customers-actions'
import { LOAD, SELECT } from '../../../store/customers/customers-actions';

@Injectable()
export class CustomersDataService {

    constructor(private store: Store<fromRoot.ApplicationState>,
        private httpService: HttpService) {
    }

    getIsCustomersLoaded() {
        return this.store.select(fromRoot.getIsCustomersLoaded);
    }

    getCustomersList() {
        return this.store.select(fromRoot.getCustomersList);
    }

    getSelectedCustomer() {
        return this.store.select(fromRoot.getSelectedCustomer);
    }


    loadCustomersAction() {
        this.store.dispatch(new fromRootActions.LoadAction());
    }

    selectCustomerAction(id: number) {
        this.store.dispatch(new fromRootActions.SelectAction(id));
    }

    addCustomerAction(customer: Customer) {
        this.store.dispatch(new fromRootActions.AddAction(customer));
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
