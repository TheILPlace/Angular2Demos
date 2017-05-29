import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersContainerComponent } from './customers-container.component';
import { CustomersListComponent } from './customers-list.component';
import { CustomersDetailsComponent } from './customers-details.component';
import { CustomersResolverService } from './services/customers.resolver';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersContainerComponent, CustomersListComponent, CustomersDetailsComponent],
  providers: [CustomersResolverService]
})
export class CustomersModule { }
