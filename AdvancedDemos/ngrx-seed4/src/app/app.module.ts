import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './nav/about.component';

import { AppComponent } from './app.component';


import './rxjs-operators';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';
import { PreloadSelectedModulesList } from './preload_selected_modules_list';

@NgModule({
  declarations: [
    AppComponent, NavComponent, AboutComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, CoreModule
  ],
  providers: [PreloadSelectedModulesList],
  bootstrap: [AppComponent]
})
export class AppModule { }
