
import { Routes, RouterModule } from '@angular/router';
import { IRouting } from '../../shared/interfaces/IRouting';
import { CustomersComponent } from './customers.component';
import { CustomerEditComponent } from './customer-edit.component';



const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: ':id', component: CustomerEditComponent},
  //{ path: ':id', component: CustomerEditReactiveComponent },
  { path: '**', redirectTo:'customers' }
];

export const customersRouting: IRouting = { 
    routes: RouterModule.forChild(routes),
    components: [CustomersComponent,CustomerEditComponent]
};


//create the RouterModule out of the routes configuration

