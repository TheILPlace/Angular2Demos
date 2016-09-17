import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";


@NgModule({
    declarations: [AppComponent, TemplateDrivenComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}