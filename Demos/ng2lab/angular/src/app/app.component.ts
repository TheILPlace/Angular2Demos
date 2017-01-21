import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isNavOpen=false;
  navwidth = "0px";

  changeNav()
  {
    if (this.isNavOpen)
        this.navwidth="0px";
    else 
        this.navwidth="250px";
    
    this.isNavOpen= !this.isNavOpen;
  }


}
