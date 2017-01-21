import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';

//we import both the router module, already configured 'forRoot'
//and also the components used in the router
import { appRouting } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    appRouting.components
  ],
  imports: [
    BrowserModule,
    CoreModule,
    appRouting.routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
