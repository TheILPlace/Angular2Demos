import { Routes,
         RouterModule } from '@angular/router';
import {CustomPreloadingStrategy} from ".//preload/custom-preloading.strategy";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
  { path: 'invoices', loadChildren: 'app/invoices/invoices.module#InvoicesModule',
        data: {
            preload: true
        } }
];


export const routing = RouterModule.forRoot(routes, {
        preloadingStrategy: CustomPreloadingStrategy
    });

