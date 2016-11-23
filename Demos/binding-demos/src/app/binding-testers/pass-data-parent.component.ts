import { Component,ViewChild } from '@angular/core';
import { PassDataChildComponent} from './pass-data-child.component';

//https://angular.io/docs/ts/latest/cookbook/component-communication.html
@Component({
  
  selector: 'app-pass-data-parent',
  template: `
    <div class="app">
      
      Counter: <app-pass-data-child [counterValue]="startValue" 
      (counterChange)="myValueChange($event);" #child></app-pass-data-child>

    </div>

    <div>
      using child variable via local variable: Value: {{child.counterValue}}
      <br>
    </div>

    <div>
      using component local variable: Value: {{localValue }}
      <br>
    </div>


    <div>
      using ViewChild: Value: {{childComponent.counterValue }}
      <br>
      <button (click)="child.increment()">Click Client Increment !! </button>
      <br>
    </div>

  `,
  styles: [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
    }
  `]
})
export class PassDataParentComponent  {

 public startValue:number = 10;
 
 public localValue:number = 0;

  @ViewChild(PassDataChildComponent)
  childComponent: PassDataChildComponent;

 
myValueChange(event) {
    this.localValue = event.value;
  }


}
