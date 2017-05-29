
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Configuration } from '../../../shared/models/configuration';
import { CacheService } from './cache.service';

@Injectable()
export class ConfigService {
   private config: Configuration;
   constructor(private http: Http, private cacheService: CacheService) {}

  load(url: string) {
    return new Promise((resolve) => {
      this.http.get(url).map(res => res.json())
        .switchMap(config => {
          this.config = config;
           console.log('finished loading config');
          return this.cacheService.loadCache(config);

        })
        .subscribe(() => {
            console.log('finished loading ');
            resolve();
        });
    });

        }
getConfiguration(): Configuration {

    return this.config;
  }
}