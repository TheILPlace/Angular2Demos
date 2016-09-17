import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
    selector: 'service-tester',
    template: `
    <p>first-Component</p>
    <tester-1></tester-1>
     <hr>
     <p>second-Component</p>
     <tester-2></tester-2>
  `,
    providers: [DataService]
})
export class ServiceTesterComponent {
}
