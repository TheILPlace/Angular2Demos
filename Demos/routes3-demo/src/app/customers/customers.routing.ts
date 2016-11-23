import { RouterModule,Routes }  from '@angular/router';

import { CustomersListComponent } from './customers-list.component';
import { CustomersComponent } from './customers.component';


const routes: Routes = [
  { path: '',
    component: CustomersComponent,
    children: [
      { path: '',    component: CustomersListComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);




// export const routing = RouterModule.forChild([
//   //{ path: '', redirectTo: 'customers', pathMatch: 'full'},

//   { path: 'customers', component: CustomersComponent},

// ]);


