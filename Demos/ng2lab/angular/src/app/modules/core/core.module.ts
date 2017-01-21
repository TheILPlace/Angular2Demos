import { NgModule,Optional,SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EnsureModuleLoadedOnceGuard } from '../../shared/ensureModuleLoadedOnceGuard';

import { NavComponent }   from './nav.component';


@NgModule({
    imports: [FormsModule,HttpModule,RouterModule],
    exports: [NavComponent,FormsModule,HttpModule],
    declarations: [NavComponent],
    providers: [],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    
    //Ensure that CoreModule is only loaded into AppModule

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}
 

