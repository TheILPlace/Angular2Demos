import { NgModule,
         ModuleWithProviders } from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';


import { LogService }         from './log.service';

@NgModule({
  imports:      [ CommonModule ],
  
  exports:      [ CommonModule, FormsModule ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ LogService ]
    };
  }
}


@NgModule({
  exports:   [ SharedModule ],
  providers: [ LogService ]
})
export class SharedRootModule { }


