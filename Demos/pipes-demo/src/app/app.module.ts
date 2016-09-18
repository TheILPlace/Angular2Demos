import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { FilterPipe } from "./filter.pipe";
import { DoublePipe } from "./double.pipe";



@NgModule({
    declarations: [AppComponent, FilterPipe, DoublePipe],
    imports: [BrowserModule,FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}