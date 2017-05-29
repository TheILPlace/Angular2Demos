import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StoreService } from '../core/store/store.service';
import { StoreData, UiState } from '../core/store/store';
import { Customer } from './models/customer';


@Component({
  selector: 'ach-customers-container',
  template: `
    <p>
      customers-container Works!
    </p>
    <div>
    
      <ach-customers-list [customers] = "customers$ | async"
        (customerAdded) = "onCustomerAdded($event)"
        (customerSelected) = "onCustomerSelected($event)"></ach-customers-list>
    </div>

    <hr>
     <ach-customers-details [customer] = "selectedCustomer$ | async"></ach-customers-details>
     <br>
     
  `,
  styles: []
})
export class CustomersContainerComponent implements OnInit {

  customers$: Observable<Array<Customer>>;
  selectedCustomer$: Observable<Customer>;


  constructor(private storeService: StoreService) {

    // get list of customers from the storeService
    this.customers$ = this.storeService.getCustomers();

    // we need the selected customerid from the uiState, and use it 
    // to filter the customers that exists in the storeData
    // i've created a selector for this, in the storeService

    this.selectedCustomer$ = this.storeService.getSelectedCustomer();





  }

  ngOnInit() {


  }

  onCustomerAdded(customer: Customer) {
    this.storeService.addCustomer(customer);

  }

  onCustomerSelected(id: number) {
    this.storeService.selectCustomer(id);
  }

}
