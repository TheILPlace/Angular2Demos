import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataFilterService } from './services/data-filter.service';
import { DataService } from './services/data.service';
import { ICustomer } from './interfaces/ICustomer';

@Component({ 
  
  selector: 'customers', 
  templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {

  title: string;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];

  totalRecords: number = 0;
  pageSize: number = 10;

  constructor(private router: Router, 
              private dataService: DataService,
              private dataFilter: DataFilterService) { }
  
  ngOnInit() {
    this.title = 'Customers';
    this.getCustomers();
  }

  filterChanged(filterText: string) {
    if (filterText && this.customers) {
        let props = ['firstName', 'lastName', 'address', 'email'];
        this.filteredCustomers = this.dataFilter.filter(this.customers, props, filterText);
    }
    else {
      this.filteredCustomers = this.customers;
    }
  }

  
  getCustomers() {
    this.dataService.getCustomers()
        .subscribe((customers:ICustomer[]) => {
          
          this.customers = this.filteredCustomers = customers;
          
        },
        (err: any) => console.log(err),
        () => console.log('getCustomers() retrieved customers'));
  }

}