import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { DirectiveSamplesComponent } from './directive-samples.component';
import { HighlightDirective,HighlightMouseDirective,
    HighlightMouseWithPropertyBindingDirective,
    CustomStructuralNotIfDirective } from './directive-testers';
 
 
@NgModule({
    declarations: [AppComponent,DirectiveSamplesComponent,HighlightDirective,
    HighlightMouseDirective,HighlightMouseWithPropertyBindingDirective,
    CustomStructuralNotIfDirective],
    imports:      [BrowserModule,FormsModule],
    bootstrap:    [AppComponent],
    
})
export class AppModule {}
