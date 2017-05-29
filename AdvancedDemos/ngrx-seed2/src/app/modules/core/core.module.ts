import { NgModule, APP_INITIALIZER, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';

//ngrx
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// routing
import { CoreRoutingModule } from './core-routing.module';

// services
import { ConfigService } from './services/config.service';
import { CacheService } from './services/cache.service';

import { environment } from '../../../environments/environment';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';

import { reducer } from '../../store/reducers';
import { CustomersEffects } from '../../store/customers/customers-effects';
import { CustomersDataService } from '../customers/services/customers-data.service';





export function ConfigLoader(configService: ConfigService) {
  // Note: this factory need to return a function (that return a promise)
  console.log('before load config');
  return () => configService.load(environment.configFile);
}

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.runAfterBootstrap(CustomersEffects)
  ],
  declarations: [], 
  providers: [HttpService, ConfigService, CacheService,

    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ConfigService],
      multi: true
    },
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

