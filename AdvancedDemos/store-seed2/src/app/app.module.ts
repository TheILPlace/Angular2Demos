
// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// modules
import { CoreModule } from './modules/core/core.module';

// Routing
import { AppRoutingModule } from './app-routing.module';


// Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './nav/about.component';
import { PreloadSelectedModulesList } from './preload_selected_modules_list';

import './rxjs-imports';

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
