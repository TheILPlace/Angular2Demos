import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { customersRouting } from './customers.routing';
import { DataService } from './services/data.service';
import { DataFilterService } from './services/data-filter.service';
import { TrackByService } from './services/trackby.service';

import { CustomersGridComponent } from './customers-grid.component';




import { Sorter } from './services/sorter';
import { ValidationService } from './services/validation.service';
import { FilterTextboxComponent } from './filter-textbox.component';


import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [RouterModule,customersRouting.routes,
    CommonModule,FormsModule,SharedModule],
    exports: [],
    declarations: [customersRouting.components,
    CustomersGridComponent,FilterTextboxComponent],
    providers: [DataService, DataFilterService,TrackByService,Sorter,
    ValidationService],
})
export class CustomersModule  {  }  

