import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DataDrivenComponent } from "./data-driven/data-driven.component";


@NgModule({
    declarations: [AppComponent, DataDrivenComponent],
    imports: [BrowserModule, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}