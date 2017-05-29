import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Customer } from './models/customer';

@Component({
  selector: 'ach-customers-list',
  template: `
    <p>
      customers-list Works!
    </p>
    <ul>
    <li *ngFor="let customer of customers">
    {{customer.id}} : {{customer.name}} - {{customer.address}}
    <button (click)="customerSelected.emit(+customer.id)">Select</button>
    </li></ul>
    
    
  `,
  styles: []
})
export class CustomersListComponent implements OnInit {

@Input() customers: Customer[];
//@Output() customerAdded: EventEmitter<Customer> = new EventEmitter<Customer>();
@Output () customerSelected: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  // addCustomer(id: string, name: string, address: string) {
  //   const customer = new Customer();
  //   customer.id = +id;
  //   customer.name = name;
  //   customer.address = address;
  //   this.customerAdded.emit(customer);
  // }



}
