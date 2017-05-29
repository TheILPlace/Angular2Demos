import { Component } from '@angular/core';

@Component({
  
  selector: 'app-event-binding',
  template: `
    <p>
      test <button (click)="onClicked()">Click me! </button>
    </p>
  `,
  styles: []
})
export class EventBindingComponent {

  onClicked() {
    alert('you clicked me !');
  }
 

}
