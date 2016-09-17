import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { ServiceTesterComponent } from "./service/service-tester.component";
import { Tester1Component } from "./service/tester-1.component";
import { Tester2Component } from "./service/tester-2.component";
import { LogService } from "./service/log.service";

@NgModule({
    declarations: [
        AppComponent,
        ServiceTesterComponent,
        Tester1Component,
        Tester2Component
    ],
    imports: [BrowserModule],
    providers: [LogService],
    bootstrap: [AppComponent]
})
export class AppModule {}