import { Component, Input} from '@angular/core';

@Component({
  
  selector: 'app-custom-properties',
  template: `
    <p>
      This is 'result' binding: {{result+1}}
    </p>
  `
})
export class CustomPropertiesComponent {

@Input() result: number = 0;
}
