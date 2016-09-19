import { Component } from '@angular/core';

@Component({
  
  selector: 'str-int',
  template: `
    
    <br>
    <h1>{{mytext}}</h1>
    <br>
    <ng-content></ng-content>
  `
})
export class StringInterpolationComponent {
  mytext = 'this text is from a variable';
}




// template: `
//     <article>
//       <ng-content></ng-content>
//     </article>
//     <br>
//     <h1>{{mytext}}</h1>
//   `