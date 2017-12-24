import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Customer } from './models/customer';
import { CustomersDataService } from './services/customers-data.service';


@Component({
  selector: 'ach-customers-container',
  template: `
    <p>
      customers-container Works!
    </p>
    <div>
    
      <ach-customers-list [customers] = "customers$ | async"
        
        (customerSelected) = "onCustomerSelected($event)"></ach-customers-list>
    </div>

    <hr>
    <ach-customers-add (customerAdded)="onCustomerAdded($event)"></ach-customers-add>

    <hr>
     <ach-customers-details [customer] = "selectedCustomer$ | async"></ach-customers-details>
     <br>
     
  `,
  styles: []
})
export class CustomersContainerComponent implements OnInit {

  customers$: Observable<Array<Customer>>;
  selectedCustomer$: Observable<Customer>;


  constructor(private customersDataService: CustomersDataService) {

    // get list of customers from the storeService
    this.customers$ = this.customersDataService.getCustomersList();

    // we need the selected customerid from the uiState, and use it 
    // to filter the customers that exists in the storeData
    // i've created a selector for this, in the storeService

    this.selectedCustomer$ = this.customersDataService.getSelectedCustomer();





  }

  ngOnInit() {


  }

  onCustomerAdded(customer: Customer) {
    this.customersDataService.addCustomerAction(customer);

  }

  onCustomerSelected(id: number) {
    this.customersDataService.selectCustomerAction(id);
  }

}
