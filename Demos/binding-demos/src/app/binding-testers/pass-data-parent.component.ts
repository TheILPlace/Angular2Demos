import { Component,ViewChild } from '@angular/core';
//import { PassDataChildComponent} from './pass-data-child.component';

//https://angular.io/docs/ts/latest/cookbook/component-communication.html
@Component({
  
  selector: 'app-pass-data-parent',
  template: `
    <div class="app">
      
      Counter: <app-pass-data-child [counterValue]="myValue" 
      (counterChange)="myValueChange($event);" #child></app-pass-data-child>

    </div>

    <div>
      using child variable: Value: {{child.counterValue}}
      <br>
    </div>

    <div>
      using local variable: Value: {{myValue2 }}
      <br>
    </div>


    <!--div>
      using ViewChild: Value: {{childComponent.counterValue }}
      <br>
    </div-->

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

 public myValue:number = 2;
 public myValue2:number = 2;

//  @ViewChild(PassDataChildComponent)
//  childComponent: PassDataChildComponent;

 
myValueChange(event) {
    this.myValue2 = event.value;
  }


}
