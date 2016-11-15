import { RouterModule, Routes } from "@angular/router";

import { CustomerComponent } from "./customer.component";
import { Customer2Component } from "./customer2.component";
import { Customer3Component } from "./customer3.component";
import { HomeComponent } from "./home.component";


import { CustomerDetailResolve }   from './customer-detail-resolve';

 
const APP_ROUTES: Routes = [
    { path: 'customer/:id', component: CustomerComponent },
    { path: 'customer2/:id', component: Customer2Component 
      ,resolve:  {resCustomer:CustomerDetailResolve }      },
    { path: 'customers', component: Customer3Component },  
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

//export const routing = RouterModule.forRoot(APP_ROUTES, {enableTracing:true});
export const routing = RouterModule.forRoot(APP_ROUTES);
