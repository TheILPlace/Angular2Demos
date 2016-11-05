import { Component } from '@angular/core';

@Component({
  
  selector: 'app-binding-samples',
  templateUrl: './binding-samples.component.html',
  styles: []
})
export class BindingSamplesComponent  {


private outerValue:string="initial value";


showAlert(value:string){
  alert(value + ' father component');
}

}
