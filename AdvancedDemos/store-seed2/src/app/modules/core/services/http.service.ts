import { Injectable } from '@angular/core';
import { Response, RequestOptions, Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './config.service';

@Injectable()
export class HttpService {


    baseurl: string = this.configService.getConfiguration().webApiBaseUrl;
    headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options = new RequestOptions({ headers: this.headers, withCredentials: true }); // Create a request option



    get(url: string): Observable<Response> {
       return this.http.get(this.baseurl + url)
       .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    post(url: string, payload: any): Observable<Response>  {
        let bodyString = JSON.stringify(payload); // Stringify payload
       
        return this.http.post(this.baseurl + url, bodyString, this.options) // ...using post request
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

    put(url: string, payload: any): Observable<Response>  {
        let bodyString = JSON.stringify(payload); // Stringify payload
        return this.http.put(this.baseurl + url, bodyString, this.options) // ...using post request
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


     delete(url: string): Observable<Response> {
       return this.http.get(url)
       .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    constructor(private http: Http, private configService: ConfigService) { }

}