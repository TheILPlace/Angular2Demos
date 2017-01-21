import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';


import { environment } from '../../../../environments/environment.prod';
import { ICustomer } from '../interfaces/ICustomer';

@Injectable()
export class DataService {
  
    baseUrl: string = environment.baseUrl+'customers';

    constructor(private http: Http) { 

    }
    
    getCustomers() : Observable<ICustomer[]> {
        return this.http.get(this.baseUrl)
                   .map((res: Response) => {
                       let customers = res.json();
                       return customers;
                   })
                   .catch(this.handleError);
    }

   
    getCustomer(id: string) : Observable<ICustomer> {
        return this.http.get(this.baseUrl + '/' + id)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    insertCustomer(customer: ICustomer) : Observable<ICustomer> {
        return this.http.post(this.baseUrl, customer)
                   .map((res: Response) => {
                       const data = res.json();
                       console.log('insertCustomer status: ' + data.status);
                       return data.customer;
                   })
                   .catch(this.handleError);
    }
   
    updateCustomer(customer: ICustomer) : Observable<ICustomer> {
        return this.http.put(this.baseUrl + '/' + customer._id, customer) 
                   .map((res: Response) => {
                       const data = res.json();
                       console.log('updateCustomer status: ' + data.status);
                       return data.customer;
                   })
                   .catch(this.handleError);
    }

    deleteCustomer(id: string) : Observable<boolean> {
        return this.http.delete(this.baseUrl + '/' + id)
                   .map((res: Response) => res.json().status)
                   .catch(this.handleError);
    }

    // //Not used but could be called to pass "options" (3rd parameter) to 
    // //appropriate POST/PUT/DELETE calls made with http
    // getRequestOptions() {
    //     const csrfToken = ''; //would retrieve from cookie or from page
    //     const options = new RequestOptions({
    //         headers: new Headers({ 'x-xsrf-token': csrfToken })
    //     });
    //     return options;
    // }
    
   

   
    private handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

}
