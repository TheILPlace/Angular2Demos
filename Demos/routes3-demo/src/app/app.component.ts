import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <nav>
      <a routerLink="customers" routerLinkActive="active">Customers</a>
      <a routerLink="invoices"  routerLinkActive="active">Invoices</a>
      <a routerLink="home"  routerLinkActive="active">Home</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  subtitle = '(Final)';
}
