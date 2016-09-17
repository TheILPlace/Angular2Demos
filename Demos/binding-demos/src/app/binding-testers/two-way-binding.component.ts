import { Component } from '@angular/core';

@Component({
  
  selector: 'app-two-way-binding',
  template: `
    <div>
      <input type="text" [(ngModel)]="person.firstName">
      <input type="text" [(ngModel)]="person.firstName">
      <h3>{{person.firstName}}</h3>
    </div>
  `,
  styles: []
})
export class TwoWayBindingComponent {
person = {firstName:'achi',
           lastName:'lottan'};


}
