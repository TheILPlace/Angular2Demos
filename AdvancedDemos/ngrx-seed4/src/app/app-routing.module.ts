import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './nav/about.component';

import { PreloadSelectedModulesList } from './preload_selected_modules_list';

const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule', pathMatch: 'full' },
  {
    path: 'customers', loadChildren: './modules/customers/customers.module#CustomersModule'
    ,
    data: { preload: true } // pre load this module
  },
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule' },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadSelectedModulesList })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
