import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SecondTryComponent } from './second-try.component';
import { ThirdTryComponent } from './third-try.component';
import { FourthTryComponent } from './fourth-try/fourth-try.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondTryComponent,
    ThirdTryComponent,
    FourthTryComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
