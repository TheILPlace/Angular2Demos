import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CustomerComponent } from './customer.component';
import { Customer2Component } from './customer2.component';
import { Customer3Component } from './customer3.component';
  

import { routing } from "./app.routes";


import {HttpService} from './http.service';
import {DataService} from './data.service';


import {CustomerDetailResolve} from './customer-detail-resolve';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,Customer2Component,Customer3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HttpService,DataService,CustomerDetailResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
