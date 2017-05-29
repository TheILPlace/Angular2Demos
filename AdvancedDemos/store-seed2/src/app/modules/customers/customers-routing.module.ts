import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersContainerComponent } from './customers-container.component';
import { CustomersResolverService } from './services/customers.resolver';

const routes: Routes = [
  {path: '', component: CustomersContainerComponent,
  resolve: { CustomersResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
