
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';



import * as customersActions from './customers-actions';
import { CustomersDataService } from '../../modules/customers/services/customers-data.service';
import { LoadAction } from './customers-actions';
import { Customer } from '../../modules/customers/models/customer';


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/effects/blob/master/docs/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class CustomersEffects {


@Effect()
  load$: Observable<Action> = this.actions$
  .ofType(customersActions.LOAD)
    .switchMap((action) =>
      this.customersDataService.loadCustomers()
      .map((customers: Customer[]) => new customersActions.LoadCompletedAction(customers) )

    );

    constructor(private actions$: Actions,
              private customersDataService: CustomersDataService) { }
}
