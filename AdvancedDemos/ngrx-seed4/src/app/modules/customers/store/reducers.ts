import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromCustomers from './customers/customers-reducer';
import * as fromRoot from '../../core/store/reducers';

export interface CustomersState {
  customersState: fromCustomers.State;
}

export interface State extends fromRoot.ApplicationState {
  'customersState': CustomersState;
}

export const INITIAL_CUSTOMERS_STATE: CustomersState = {

  customersState: fromCustomers.initialState
};

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers = {
  customersState: fromCustomers.reducer,
};

//// selectors

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
*/
export const getCustomersFeatureState = createFeatureSelector<CustomersState>('customersStore');
export const getCustomersState = createSelector(getCustomersFeatureState,  state => state.customersState);

export const getCustomersList = createSelector(getCustomersState, fromCustomers.getCustomers);
export const getIsCustomersLoaded = createSelector(getCustomersState, fromCustomers.getIsLoaded);
export const getSelectedCustomer = createSelector(getCustomersState, fromCustomers.getSelectedCustomer);
