import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
// adds ALL RxJS statics & operators to Observable
import { Observable } from "rxjs/Rx";

// // See node_module/rxjs/Rxjs.js
// // Import just the rxjs statics and operators we need for THIS app.

// // Statics
// import 'rxjs/add/observable/throw';

// // Operators
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/toPromise';
import { Customer } from './customer';




@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData(): Observable<Customer[]> {
    return this.http.get('http://localhost/WebApiDemo/api/Customers')
      .map((response: Response) => response.json());
  }

  sendData(customer: Customer) {
    const body = JSON.stringify(customer);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost/WebApiDemo/api/Customers', body, {
      headers: headers, withCredentials: true
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  // getOwnData() {
  //   return this.http.get('https://angular2-course-60763.firebaseio.com/data.json')
  //     .map((response: Response) => response.json());
  // }

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
