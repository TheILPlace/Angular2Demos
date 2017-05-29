import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersContainerComponent } from './customers-container.component';
import { CustomersGuardService } from './services/customers.guard';


const routes: Routes = [
  {path: '', component: CustomersContainerComponent,
  canActivate: [ CustomersGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
