import { Injectable, Inject } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable'
export namespace WebApiDemo_Controllers_Client {
    @Injectable()
    export class Customers2 {
        constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: Http){
        }

        /** 
         * GET api3/customers3/2
         * @return {any} 
         */
        getTwoCustomers(): Observable<any>{
            return this.http.get(this.baseUri + 'api3/customers3/2').map(response=> response.json() || {});
        }

        /** 
         * GET api/Customers2
         * @return {any} 
         */
        getMyCustomers(): Observable<any>{
            return this.http.get(this.baseUri + 'api/Customers2').map(response=> response.json() || {});
        }

        /** 
         * GET api/Customers2/{id}
         * @param {number} id 
         * @return {any} 
         */
        getOneCustomers(id: number): Observable<any>{
            return this.http.get(this.baseUri + 'api/Customers2/'+id).map(response=> response.json() || {});
        }
    }

    @Injectable()
    export class Customers {
        constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: Http){
        }

        /** 
         * GET api/Customers
         * @return {any} 
         */
        get(): Observable<any>{
            return this.http.get(this.baseUri + 'api/Customers').map(response=> response.json() || {});
        }

        /** 
         * GET api/Customers/{id}
         * @param {number} id 
         * @return {any} 
         */
        getById(id: number): Observable<any>{
            return this.http.get(this.baseUri + 'api/Customers/'+id).map(response=> response.json() || {});
        }

        /** 
         * POST api/Customers
         * @param {any} customer 
         * @return {any} 
         */
        post(customer: any): Observable<any>{
            return this.http.post(this.baseUri + 'api/Customers', JSON.stringify(customer), { headers: new Headers({ 'Content-Type': 'application/json' }) }).map(response=>response.json() || {});
        }
    }

    @Injectable()
    export class Values1 {
        constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: Http){
        }

        /** 
         * GET api/Values1
         * @return {Array<string>} 
         */
        get(): Observable<Array<string>>{
            return this.http.get(this.baseUri + 'api/Values1').map(response=> response.json() || {});
        }

        /** 
         * GET api/Values1/{id}
         * @param {number} id 
         * @return {string} 
         */
        getById(id: number): Observable<string>{
            return this.http.get(this.baseUri + 'api/Values1/'+id).map(response=> response.json() || {});
        }

        /** 
         * POST api/Values1
         * @param {string} value 
         * @return {void} 
         */
        post(value: string): Observable<void>{
            return this.http.post(this.baseUri + 'api/Values1', JSON.stringify(value), { headers: new Headers({ 'Content-Type': 'application/json' }) }).map(response=>response.json() || {});
        }

        /** 
         * PUT api/Values1/{id}
         * @param {number} id 
         * @param {string} value 
         * @return {void} 
         */
        put(id: number, value: string): Observable<void>{
            return this.http.put(this.baseUri + 'api/Values1/'+id, JSON.stringify(value), { headers: new Headers({ 'Content-Type': 'application/json' }) }).map(response=>response.json() || {});
        }

        /** 
         * DELETE api/Values1/{id}
         * @param {number} id 
         * @return {void} 
         */
        delete(id: number): Observable<void>{
            return this.http.delete(this.baseUri + 'api/Values1/'+id).map(response=> response.json() || {});
        }
    }

    @Injectable()
    export class Values2 {
        constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: Http){
        }

        /** 
         * GET api/Values2
         * @return {Array<string>} 
         */
        get(): Observable<Array<string>>{
            return this.http.get(this.baseUri + 'api/Values2').map(response=> response.json() || {});
        }

        /** 
         * GET api/Values2/{id}
         * @param {number} id 
         * @return {string} 
         */
        getById(id: number): Observable<string>{
            return this.http.get(this.baseUri + 'api/Values2/'+id).map(response=> response.json() || {});
        }

        /** 
         * POST api/Values2
         * @param {string} value 
         * @return {void} 
         */
        post(value: string): Observable<void>{
            return this.http.post(this.baseUri + 'api/Values2', JSON.stringify(value), { headers: new Headers({ 'Content-Type': 'application/json' }) }).map(response=>response.json() || {});
        }

        /** 
         * PUT api/Values2/{id}
         * @param {number} id 
         * @param {string} value 
         * @return {void} 
         */
        put(id: number, value: string): Observable<void>{
            return this.http.put(this.baseUri + 'api/Values2/'+id, JSON.stringify(value), { headers: new Headers({ 'Content-Type': 'application/json' }) }).map(response=>response.json() || {});
        }

        /** 
         * DELETE api/Values2/{id}
         * @param {number} id 
         * @return {void} 
         */
        delete(id: number): Observable<void>{
            return this.http.delete(this.baseUri + 'api/Values2/'+id).map(response=> response.json() || {});
        }
    }

    @Injectable()
    export class Achi {
        constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: Http){
        }

        /** 
         * GET api/Achi
         * @return {Array<string>} 
         */
        get(): Observable<Array<string>>{
            return this.http.get(this.baseUri + 'api/Achi').map(response=> response.json() || {});
        }

        /** 
         * GET api/Achi/{id}
         * @param {number} id 
         * @return {any} 
         */
        getById(id: number): Observable<any>{
            return this.http.get(this.baseUri + 'api/Achi/'+id).map(response=> response.json() || {});
        }

        /** 
         * POST api/Achi
         * @param {string} value 
         * @return {void} 
         */
        post(value: string): Observable<void>{
            return this.http.post(this.baseUri + 'api/Achi', JSON.stringify(value), { headers: new Headers({ 'Content-Type': 'application/json' }) }).map(response=>response.json() || {});
        }

        /** 
         * PUT api/Achi/{id}
         * @param {number} id 
         * @param {string} value 
         * @return {void} 
         */
        put(id: number, value: string): Observable<void>{
            return this.http.put(this.baseUri + 'api/Achi/'+id, JSON.stringify(value), { headers: new Headers({ 'Content-Type': 'application/json' }) }).map(response=>response.json() || {});
        }

        /** 
         * DELETE api/Achi/{id}
         * @param {number} id 
         * @return {void} 
         */
        delete(id: number): Observable<void>{
            return this.http.delete(this.baseUri + 'api/Achi/'+id).map(response=> response.json() || {});
        }
    }

}

export namespace WebApiTester_Controllers_Client {
    @Injectable()
    export class Tester {
        constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: Http){
        }

        /** 
         * GET api/Tester
         * @return {Array<string>} 
         */
        get(): Observable<Array<string>>{
            return this.http.get(this.baseUri + 'api/Tester').map(response=> response.json() || {});
        }

        /** 
         * POST api/Tester
         * @param {string} value 
         * @return {void} 
         */
        post(value: string): Observable<void>{
            return this.http.post(this.baseUri + 'api/Tester', JSON.stringify(value), { headers: new Headers({ 'Content-Type': 'application/json' }) }).map(response=>response.json() || {});
        }

        /** 
         * PUT api/Tester/{id}
         * @param {number} id 
         * @param {string} value 
         * @return {void} 
         */
        put(id: number, value: string): Observable<void>{
            return this.http.put(this.baseUri + 'api/Tester/'+id, JSON.stringify(value), { headers: new Headers({ 'Content-Type': 'application/json' }) }).map(response=>response.json() || {});
        }

        /** 
         * DELETE api/Tester/{id}
         * @param {number} id 
         * @return {void} 
         */
        delete(id: number): Observable<void>{
            return this.http.delete(this.baseUri + 'api/Tester/'+id).map(response=> response.json() || {});
        }
    }

}

