import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { BindingSamplesComponent } from './binding-samples.component';




import { StringInterpolationComponent, PropertyBindingComponent , CustomPropertiesComponent, 
    EventBindingComponent,CustomEventBindingComponent,TwoWayBindingComponent,
    PassDataParentComponent,PassDataChildComponent
} from './binding-testers' //we use the index.ts file !

 
 
@NgModule({
    declarations: [AppComponent,BindingSamplesComponent,
    StringInterpolationComponent,PropertyBindingComponent,
    CustomPropertiesComponent,EventBindingComponent,CustomEventBindingComponent,TwoWayBindingComponent,
    PassDataParentComponent,PassDataChildComponent],
    imports:      [BrowserModule,FormsModule],
    bootstrap:    [AppComponent],
    
})
export class AppModule {}
