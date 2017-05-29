import { RouterStateSnapshot, Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../models/customer';
import { StoreService } from '../../core/store/store.service';
import { UiState } from '../../core/store/store';

@Injectable()
export class CustomersResolverService implements Resolve<boolean> {
    constructor(private storeService: StoreService) { }
    // note: change to Guard
    resolve(route: ActivatedRouteSnapshot): Observable<boolean> {



        this.storeService.loadCustomers();
        // wait for the loading process to finish, and then release the
        // user to the route.
        return this.storeService.store$.uiState
            .map((uistate: UiState) => uistate.customersLoaded)
            .filter(loaded => loaded)
            .take(1);


    }
}
