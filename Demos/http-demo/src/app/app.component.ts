import { Component, OnDestroy } from '@angular/core';

import { HttpService } from './http.service';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`
    .center {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
      } 
  `]
})
export class AppComponent implements OnDestroy {
    subscription: any;
  items: any[] = [];

  asyncCustomers$ = this.httpService.getData();


  customers: Customer[];
  newCustomerID: any = 0 ;

  constructor(private httpService: HttpService) {}

  onSubmit(firstName: string, lastName: string, address: string, phone: string) {
     // create the new customer
     let newCustomer: Customer = new Customer(firstName,lastName,address,phone);

     // zsend to our http service
     this.httpService.sendData(newCustomer)
      .subscribe(
        data => {
          this.postCompleted(data)
        },
        error => console.log(error)
      );
  }

 postCompleted(data)
  {
    console.log(data);
    this.newCustomerID = data;
  }

  onGetData() {
   this.subscription =  this.httpService.getData()
      .subscribe(
        (data: Customer[])  => {
          this.customers = data;
        }
      );
  }



// onGetData() {
//     this.httpService.getData()
//       .subscribe(
//         data => {
//           const myArray = [];
//           for (let key in data) {
//             myArray.push(data[key]);
//           }
//           this.items = myArray;
//         }
//       );
//   }

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
