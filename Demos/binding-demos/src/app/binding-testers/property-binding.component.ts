import { Component } from '@angular/core';

@Component({
  
  selector: 'prop-bind',
  templateUrl: 'property-binding.component.html',
  styles: [`
    .redBox  {border: 1px solid red;}
  `]
})
export class PropertyBindingComponent {
  myvalue = 'this text is from a variable';


  isItTrue(){

    return false;
  }

}

