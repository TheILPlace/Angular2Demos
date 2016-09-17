import { Component } from '@angular/core';

import { HttpService } from "./http.service";
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  items: any[] = [];
  asyncString = this.httpService.getData();
  customers: Customer[];
  newCustomerID: any = 0 ;

  constructor(private httpService: HttpService) {}

  onSubmit(firstName: string, lastName: string, address: string, phone: string) {
     //create the new customer
     var newCustomer = new Customer(firstName,lastName,address,phone);
 
     //send to our http service
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
    this.httpService.getData()
      .subscribe(
        data => {
          
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



}
