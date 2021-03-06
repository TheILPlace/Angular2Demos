import * as _ from 'lodash';
import { Customer } from '../../models/customer';
import { Action, createSelector } from '@ngrx/store';
import * as customers from './customers-actions';

export interface State {
    customers: Array<Customer>;
    loaded: boolean;
    selectedCustomerId: number;
}

export const initialState: State = {
    customers: [],
    loaded: false,
    selectedCustomerId: null

};



export function reducer(state = initialState, action: customers.Actions): State {

    const newstate = _.cloneDeep(state);


    switch (action.type) {

        case customers.LOAD_COMPLETED:
                newstate.customers = _.cloneDeep(action.payload);
                newstate.loaded = true;

            break;
        case customers.SELECT:
            const id = action.payload;
            newstate.selectedCustomerId = id;
            break;

        case customers.ADD:
            newstate.customers.push(_.cloneDeep(action.payload));
            break;


        default: {
            //
        }
    }

    return newstate;
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getCustomers = (state: State) => state.customers;
export const getIsLoaded = (state: State) => state.loaded;
export const getSelectedCustomerId = (state: State) => state.selectedCustomerId;
export const getSelectedCustomer = createSelector(getCustomers, getSelectedCustomerId, (_customers: Customer[], _selectedId: number) => {
    return _customers.filter((customer: Customer) => customer.id === _selectedId)[0];
});


