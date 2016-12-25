import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import  {AppRoutingModule} from './app-routing.module';

import { routing }        from './app.routing';

import { SharedModule }   from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';

import {CustomPreloadingStrategy} from './preload/custom-preloading.strategy';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //AppRoutingModule,
    routing,
    SharedModule.forRoot(),
    HomeModule
  ],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
