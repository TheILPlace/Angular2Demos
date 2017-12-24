import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './models/customer';

@Component({
  selector: 'ach-customers-details',
  template: `
    <p>
      customers-details Works!
    </p>
    <div>
    {{customer?.id}} : {{customer?.name}} - {{customer?.address}}
    </div>
  `,
  styles: []
})
export class CustomersDetailsComponent implements OnInit {
@Input() customer: Customer;

  constructor() { }

  ngOnInit() {
  }

}
