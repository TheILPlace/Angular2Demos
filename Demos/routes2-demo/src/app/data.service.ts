import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Http,Response } from '@angular/http';
import { Customer } from './model/customer';
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";


@Injectable()
export class DataService {

  constructor(private  httpService: HttpService) { }

  dataServiceUrl: string = 'http://localhost/WebApiDemo/api/Customers';
  customer: Customer;

  // getCustomerData2(customerID : number) 
  // {
  //   let tmpCustomer:Customer;
    
  //   this.httpService.genGetData(this.dataServiceUrl + '/' + customerID)
  //     .subscribe(
  //       data => {
  //         return data;
  //         //this.customer = data;
  //         //return this.customer;
  //       }
  //     );

  //     //return tmpCustomer;
  //     //return this.customer;
    
  // }




  getCustomerData(customerID : number) : Observable<Customer>
  {
    let tmpCustomer:Customer;
    
    return this.httpService.genGetData(this.dataServiceUrl + '/' + customerID)
      .map((res:Response) => res.json());
    
     
  }





}
