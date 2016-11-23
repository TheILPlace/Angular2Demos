import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { HomeComponent }   from './home.component';

import { routing }            from './home.routing';

@NgModule({
  imports:      [ SharedModule, routing ],
  declarations: [ HomeComponent ],
  
})
export class HomeModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/