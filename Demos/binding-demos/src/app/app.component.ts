import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  template: '<app-binding-samples></app-binding-samples>',
  // templateUrl: 'app.component.html',
  // styleUrls: ['app.component.css']
  styles: [`
    h1 {color:red;}
  `]
})
export class AppComponent {
  title = 'app works!';
}
