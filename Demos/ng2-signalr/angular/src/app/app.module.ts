import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import "rxjs/add/operator/map";
import { AppComponent } from './app.component';
import { SignalrClientTesterComponent} from './signalr/signalr-client-tester.component';
import {ChannelService, ChannelConfig, SignalrWindow} from "./signalr/channel.service";

import {Signalr2Service} from './signalr2/signalr2.service';
import { Signalr2ClientTesterComponent} from './signalr2/signalr2-client-tester.component';

export function loadConfig()
{
let channelConfig = new ChannelConfig();  
channelConfig.url = "http://localhost:9820/signalr";  
channelConfig.hubName = "NotificationsHub";
return channelConfig;

}


@NgModule({
  declarations: [
    AppComponent,SignalrClientTesterComponent,
    Signalr2ClientTesterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ChannelService, 
    Signalr2Service,
    { provide: SignalrWindow, useValue: window },
     
    { provide: 'channel.config', useValue: loadConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
