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

 getAllCustomersData() : Observable<Customer[]>
  {
    let tmpCustomer:Customer;
    
    return this.httpService.genGetData(this.dataServiceUrl )
      .map((res:Response) => res.json() );
    
     
  }


getAllCustomersData2(): Observable<Customer[]> {
   

   let tmpCustomers:Customer[];
   return Observable.create(observer => {
      this.httpService.genGetData(this.dataServiceUrl )
          .map(res => res.json())
          .subscribe((data) => {
             tmpCustomers = data

             observer.next(tmpCustomers);
             observer.complete();
          });
   });
}

 getAllCustomersData3() : Observable<Customer[]>
  {
    let tmpCustomer:Customer;
    
    return this.httpService.genGetData3(this.dataServiceUrl );
      //.map((res:Response) => res.json() );
    
     
  }

// getAllCustomersData22() : Observable<Customer[]>
//   {
//      let tmpCustomers:Customer[];
    



//      return Observable.create(observer =>{

//       this.httpService.genGetData(this.dataServiceUrl )
//       .map((res:Response) => res.json() )
//       .subscribe(
//         (data: Customer[]) => {
//           tmpCustomers = data
//           observer.next(tmpCustomers);
//           observer.complete();
     

//           }) 
//         }
//       );
      

    
     
//   }


}
