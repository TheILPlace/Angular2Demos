import { RouterModule,Routes }  from '@angular/router';

import { HomeComponent } from './home.component';



const routes: Routes = [
 { path: 'home', component: HomeComponent}
    ];

export const routing = RouterModule.forChild(routes);


// export const routing = RouterModule.forChild([
//   { path: 'home', component: HomeComponent}
// ]);

