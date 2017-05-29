import { Injectable } from '@angular/core';
import { Configuration } from '../../../shared/models/configuration';
import { Observable } from 'rxjs/Observable';
//import { HttpService } from './http.service';
import { Response, Http } from '@angular/http';

@Injectable()
export class CacheService {
    private cacheObject: any;

    constructor(private http: Http) { }

    // we need the configuration, but cannot inject the 
    // configService

    loadCache(config: Configuration): Observable<boolean> {
        return Observable.create(observer => {
            // load the cache, or whatever we want
            // we cannot use the httpService yet in this APP_INITIALIZERS
            // so we use the basic http servie by angular
            this.http.get(config.webApiBaseUrl + '/api/cache')
                .map((res: Response) => res.json())
                .subscribe((data: any) => {
                    console.log('cache loaded');

                });
            // we need to return an observable
            observer.next(true);
            observer.complete();

        });

    }


}