import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { ChannelService, ConnectionState } from './signalr/channel.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
