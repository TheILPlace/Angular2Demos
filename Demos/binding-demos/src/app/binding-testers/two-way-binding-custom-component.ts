import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  
  selector: 'app-two-way-binding-custom-component',
  template: `
    <div>
      <input type="text" [(ngModel)]="myvalue" (change)="onchange($event)">
      <button (click)="update_parent();">Update parent</button>
      
      <h3>inner value:  {{myvalue}}</h3>
    </div>
  `,
  styles: []
})
export class TwoWayBindingCustomComponent {

 
@Input() myvalue:string;
@Output() myvalueChange = new EventEmitter<string>(); 


onchange(event)
  {
    
    console.log('child::onchange() => value:' + event);
    this.myvalueChange.emit(event.srcElement.value);
  }



update_parent()
  {
    
    this.myvalueChange.emit(this.myvalue);
    //this.myvalue="xxx";
  }


}
