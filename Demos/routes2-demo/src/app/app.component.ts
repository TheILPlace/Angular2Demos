import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart  } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor(private _route: Router) {

  _route.events.subscribe(event =>{
    console.log(event);


  })
 }
  public ngOnInit() {
    this._route.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        
        let url = (<NavigationStart>event).url;
        //console.log(url);
        if (url !== url.toLowerCase()) { 
          this._route.navigateByUrl((<NavigationStart>event).url.toLowerCase());
        }
      }
    });
  }



  title = 'app works!';
}
