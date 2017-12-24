
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';


import { Customer } from '../../models/customer';
import { CustomersDataService } from '../../services/customers-data.service';

import * as customersActions from './customers-actions';



@Injectable()
export class CustomersEffects {

  constructor(private actions$: Actions,
    private customersDataService: CustomersDataService) { }


  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(customersActions.LOAD)
    .switchMap((action) =>
      this.customersDataService.loadCustomers()
        .map((customers: Customer[]) => new customersActions.LoadCompletedAction(customers))

    );
}
