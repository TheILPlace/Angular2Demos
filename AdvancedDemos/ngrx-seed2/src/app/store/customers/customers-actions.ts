import { Action } from '@ngrx/store';
import { Customer } from '../../modules/customers/models/customer';

export const LOAD =             '[Customer] Load';
export const LOAD_COMPLETED =   '[Customer] Load Completed';
export const SELECT =           '[Customer] Select';
export const ADD =              '[Customer] Add';


export class LoadAction implements Action {
  readonly type = LOAD;

  constructor() { }
};

export class LoadCompletedAction implements Action {
  readonly type = LOAD_COMPLETED;

  constructor(public payload: Customer[]) { }
};


export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: number) { }
};

export class AddAction implements Action {
  readonly type = ADD;

  constructor( public payload: Customer) {
    
    
  }
}


// export type Actions
//   = LoadAction
//   | LoadCompletedAction
//   | SelectAction;