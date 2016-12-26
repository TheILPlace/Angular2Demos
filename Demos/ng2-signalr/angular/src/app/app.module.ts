import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import "rxjs/add/operator/map";
import { AppComponent } from './app.component';
import { SignalrClientTesterComponent} from './signalr/signalr-client-tester.component';
import {ChannelService, ChannelConfig, SignalrWindow} from "./signalr/channel.service";


let channelConfig = new ChannelConfig();  
channelConfig.url = "http://localhost:9820/signalr";  
channelConfig.hubName = "NotificationsHub";

@NgModule({
  declarations: [
    AppComponent,SignalrClientTesterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ChannelService, 
    { provide: SignalrWindow, useValue: window },
    { provide: 'channel.config', useValue: channelConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
