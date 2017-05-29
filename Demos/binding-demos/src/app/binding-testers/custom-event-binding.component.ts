import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  
  selector: 'app-custom-event-binding',
  template: `
    <p>
      test 2 <button (click)="onClicked()">Click me! </button>
    </p>
  `,
  styles: []
})
export class CustomEventBindingComponent  {

//the "outside" name of the event proprty is "clickMe"
//while the inside implementation is "ouchYouClickedMe"

@Output("clickMe") ouchYouClickedMe = new EventEmitter<string>();
onClicked() {
  this.ouchYouClickedMe.emit('Yohoo !');

}

 

}
