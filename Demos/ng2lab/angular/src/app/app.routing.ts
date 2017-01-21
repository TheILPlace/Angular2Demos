import { Routes, RouterModule } from '@angular/router';
import { IRouting } from './shared/interfaces/IRouting';

import { HomeComponent } from './modules/core/home.component';
import { AboutComponent } from './modules/core/about.component';


const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'customers', loadChildren: './modules/customers/customers.module#CustomersModule'},
  { path: '**', redirectTo:'home' }
];

export const appRouting: IRouting = { 
    routes: RouterModule.forRoot(routes),
    components: [ HomeComponent, AboutComponent ]
};


//create the RouterModule out of the routes configuration

