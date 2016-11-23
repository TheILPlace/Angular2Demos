import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';


import { routing }  from './customers.routing';

import { CustomersComponent} from './customers.component';
import { CustomersListComponent} from './customers-list.component';


@NgModule({
  imports:      [ SharedModule, routing ],
  declarations: [ CustomersComponent,CustomersListComponent ]
  
})
export class CustomersModule { }


