import { NgModule, APP_INITIALIZER, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { HttpService } from './services/http.service';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// routing
import { CoreRoutingModule } from './core-routing.module';

// services
import { ConfigService } from './services/config.service';
import { CacheService } from './services/cache.service';

import { environment } from '../../../environments/environment';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';

import { reducers, INITIAL_APPLICATION_STATE, metaReducers } from './store/reducers';
import { CustomersDataService } from '../customers/services/customers-data.service';
import { CustomInterceptor } from './services/custome-http-interceptor';
import { CustomRouterStateSerializer } from './store/utils/custom-router-state-serializer';
import { storeFreeze } from 'ngrx-store-freeze';
import { initialState } from '../customers/store/customers/customers-reducer';




export function ConfigLoader(configService: ConfigService) {
  // Note: this factory need to return a function (that return a promise)
  console.log('before load config');
  return () => configService.load(environment.configFile);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers, initialState: INITIAL_APPLICATION_STATE}),
    StoreRouterConnectingModule,
     !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 10,
        })
      : [],
    EffectsModule.forRoot([])
  ],
  declarations: [],
  providers: [HttpService, ConfigService, CacheService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor ,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ConfigService],
      multi: true
    },
     /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    CustomersDataService

  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}

