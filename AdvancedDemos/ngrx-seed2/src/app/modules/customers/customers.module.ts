import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersContainerComponent } from './customers-container.component';
import { CustomersListComponent } from './customers-list.component';
import { CustomersDetailsComponent } from './customers-details.component';
import { CustomersGuardService } from './services/customers.guard';
import { CustomersAddComponent } from './customers-add.component';



@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersContainerComponent, CustomersListComponent, CustomersDetailsComponent, CustomersAddComponent],
  providers: [ CustomersGuardService]
})
export class CustomersModule { }
