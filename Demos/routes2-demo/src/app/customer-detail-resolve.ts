import { Injectable }  from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { DataService } from './data.service';
import { Customer } from './model/customer';



@Injectable()
export class CustomerDetailResolve implements Resolve<Customer> {
  constructor(private router: Router,private dataService: DataService) {}

  resolve( route: ActivatedRouteSnapshot): Observable<Customer> {
    let id =+route.params['id'];
    
    if (id == null)
        this.router.navigate(['home']);

    return this.dataService.getCustomerData(id)
    .map((res:Customer) => 
    {
       if (res.firstName == '1Dan')
        this.router.navigate(['home']);
       return res; 

    });
    
    //return this.dataService.getCustomerData(id);
   

////this.router.navigate(['/crisis-center']);

 
  }
}
