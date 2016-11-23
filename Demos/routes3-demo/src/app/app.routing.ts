import { Routes,
         RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
  { path: 'invoices', loadChildren: 'app/invoices/invoices.module#InvoicesModule' }
];


export const routing = RouterModule.forRoot(routes);

