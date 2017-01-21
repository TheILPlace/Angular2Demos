import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from './services/data.service';
import { ICustomer } from './interfaces/ICustomer';

@Component({
  
  selector: 'customer-edit',
  templateUrl: 'customer-edit.component.html'
})
export class CustomerEditComponent implements OnInit {

  customer: ICustomer = {
    _id: '',
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    email: '',
    
    
  };
  
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText: string = 'Insert';
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id !== '0') {
      this.operationText = 'Update';
      this.getCustomer(id);
    }

    
  }

  getCustomer(id: string) {
      this.dataService.getCustomer(id)
        .subscribe((customer: ICustomer) => {
          //Quick and dirty clone used in case user cancels out of form
          const cust = JSON.stringify(customer);
          this.customer = JSON.parse(cust);
        },
        (err: any) => console.log(err));
  }

  
  
  submit() {

      if (this.customer._id) {

        this.dataService.updateCustomer(this.customer)
          .subscribe((customer: ICustomer) => {
            if (customer) {
              this.router.navigate(['/customers']);
            } else {
              this.errorMessage = 'Unable to save customer';
            }
          },
          (err: any) => console.log(err));

      } else {

        this.dataService.insertCustomer(this.customer)
          .subscribe((customer: ICustomer) => {
            if (customer) {
              this.router.navigate(['/customers']);
            }
            else {
              this.errorMessage = 'Unable to add customer';
            }
          },
          (err: any) => console.log(err));
          
      }
  }
  
  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['customers']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteCustomer(this.customer._id)
        .subscribe((status: boolean) => {
          if (status) {
            this.router.navigate(['/customers']);
          }
          else {
            this.errorMessage = 'Unable to delete customer';
          }
        },
        (err) => console.log(err));
  }

}