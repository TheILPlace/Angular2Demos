import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule,JsonpModule } from "@angular/http";

import { AppComponent }   from './app.component';
import { HttpService } from "./http.service";


import { WikiComponent } from './wiki/';


@NgModule({
    declarations: [AppComponent,WikiComponent],
    imports: [BrowserModule, HttpModule,JsonpModule],
    bootstrap: [AppComponent],
    providers: [HttpService,JsonpModule]
})
export class AppModule {}