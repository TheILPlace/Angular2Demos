import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`
    .pipes {
      margin: 32px;
      padding: 32px;
    }
  `]
})
export class AppComponent {
  
  myValue = 'this_is_my_value';

  myFilter= 'ea';

  myDate = new Date(2016,9,19);
  values = ['Milk', 'Bread', 'Beans'];
  
  
  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data is here!'), 5000);
  });


  //more samples in the Heros sample on Angular2 website
  //https://angular.io/docs/ts/latest/guide/pipes.html


  pushValue(input:any){
    this.values.push(input);
    console.log("entered: " + input);
    ;
    

  }

}
