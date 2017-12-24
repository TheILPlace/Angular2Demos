import { Injectable } from '@angular/core';
import { Response, RequestOptions, Headers } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './config.service';

@Injectable()
export class HttpService {


    baseurl: string = this.configService.getConfiguration().webApiBaseUrl;

    get(url: string): Observable<any> {

       return this.http.get(this.baseurl + url)
       .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    post(url: string, payload: any): Observable<any>  {
        const bodyString = JSON.stringify(payload); // Stringify payload

        return this.http.post(this.baseurl + url, bodyString) // ...using post request
           .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    put(url: string, payload: any): Observable<any>  {
        const bodyString = JSON.stringify(payload); // Stringify payload
        return this.http.put(this.baseurl + url, bodyString) // ...using post request
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }


     delete(url: string): Observable<any> {
       return this.http.get(this.baseurl + url)
       .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    constructor(private http: HttpClient, private configService: ConfigService) {
     }

};
