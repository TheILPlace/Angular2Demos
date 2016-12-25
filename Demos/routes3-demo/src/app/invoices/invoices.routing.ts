import { RouterModule,Routes }  from '@angular/router';

import { InvoicesComponent } from './invoices.component';



const routes: Routes = [
 { path: '', component: InvoicesComponent}
    ];

export const routing = RouterModule.forChild(routes);


// export const routing = RouterModule.forChild([
//   { path: 'home', component: HomeComponent}
// ]);

