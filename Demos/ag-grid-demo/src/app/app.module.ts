import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ag-grid
import {AgGridModule} from "ag-grid-ng2/main";
import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';

import {RatioParentComponent} from "./grid/ratio.parent.component";
import {RatioComponent} from "./grid/ratio.component";

import {MoodEditorComponent} from "./grid/mood.editor.component";
import {MoodRendererComponent} from "./grid/mood.renderer.component";
import {DateEditorComponent} from './grid/date.editor.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    RatioParentComponent,RatioComponent,
    MoodEditorComponent,MoodRendererComponent,DateEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents([RatioParentComponent,
    RatioComponent,MoodEditorComponent,MoodRendererComponent,
    DateEditorComponent]),
    DatepickerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
