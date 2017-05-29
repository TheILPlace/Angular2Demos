import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
    <div class="jumbotron text-center">
      <h1>My First Angular 4 Application</h1>
      <p>I LOVE IT</p> 
    </div>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
