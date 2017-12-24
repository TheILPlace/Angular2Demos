import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersContainerComponent } from './customers-container.component';
import { CustomersListComponent } from './customers-list.component';
import { CustomersDetailsComponent } from './customers-details.component';
import { CustomersGuardService } from './services/customers.guard';
import { CustomersAddComponent } from './customers-add.component';
import { StoreModule, StoreFeatureModule } from '@ngrx/store';

import { reducers, INITIAL_CUSTOMERS_STATE} from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './store/customers/customers-effects';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customersStore', reducers, {initialState: INITIAL_CUSTOMERS_STATE}),
    EffectsModule.forFeature([CustomersEffects])
  ],
  declarations: [CustomersContainerComponent, CustomersListComponent, CustomersDetailsComponent, CustomersAddComponent],
  providers: [ CustomersGuardService]
})
export class CustomersModule { }
