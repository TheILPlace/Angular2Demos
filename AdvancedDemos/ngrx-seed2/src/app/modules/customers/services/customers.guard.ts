import { RouterStateSnapshot, Router, ActivatedRouteSnapshot, Resolve, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../models/customer';
import { CustomersDataService } from './customers-data.service';

@Injectable()
export class CustomersGuardService implements CanActivate {
    constructor(private customersDataService: CustomersDataService) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        this.customersDataService.loadCustomersAction();
        return this.waitForCollectionToLoad();

    }



    waitForCollectionToLoad(): Observable<boolean> {
        // wait for the loading process to finish, and then release the
        // user to the route.
        return this.customersDataService.getIsCustomersLoaded()
            .filter(loaded => loaded)
            .debounceTime(5000)
            .take(1);

    }

}
