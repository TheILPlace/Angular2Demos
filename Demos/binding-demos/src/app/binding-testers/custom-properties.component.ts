import { Component, Input} from '@angular/core';

@Component({
  
  selector: 'app-custom-properties',
  template: `
    <p>
      This is 'result' bindig: {{result}}
    </p>
  `
})
export class CustomPropertiesComponent {

@Input() result: number = 0;
}
