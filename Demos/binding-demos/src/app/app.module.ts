import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { BindingSamplesComponent } from './binding-samples.component';

//how to use barrel
//import { StringInterpolationComponent } from './testers/stringInterpolation.component';
//import { PropertyBinding } from './testers/propertyBinding.component'
//import { CustomPropertiesComponent } from './testers/custom-properties.component';
import { StringInterpolationComponent, PropertyBindingComponent , CustomPropertiesComponent, 
    EventBindingComponent,CustomEventBindingComponent,TwoWayBindingComponent,
    PassDataParentComponent,PassDataChildComponent
} from './binding-testers'

 
 
@NgModule({
    declarations: [AppComponent,BindingSamplesComponent,
    StringInterpolationComponent,PropertyBindingComponent,
    CustomPropertiesComponent,EventBindingComponent,CustomEventBindingComponent,TwoWayBindingComponent,
    PassDataParentComponent,PassDataChildComponent],
    imports:      [BrowserModule,FormsModule],
    bootstrap:    [AppComponent],
    
})
export class AppModule {}
