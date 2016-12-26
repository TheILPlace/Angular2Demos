import { Component, OnInit,OnDestroy,  ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { ChannelService, ConnectionState } from './channel.service'

@Component({
  selector: 'signalr-tester',
  templateUrl: './signalr-client-tester.component.html',
  styleUrls: ['./signalr-client-tester.component.css']
})
export class SignalrClientTesterComponent implements OnInit{
    // An internal "copy" of the connection state stream used because
    //  we want to map the values of the original stream. If we didn't 
    //  need to do that then we could use the service's observable 
    //  right in the template.
    //   
    connectionState$: Observable<string>;

    messages: string[] ;
    subscription: any;



    constructor(private channelService: ChannelService,
    private cd: ChangeDetectorRef) {
      
      
      
      // Let's wire up to the signalr observables
      //
      this.connectionState$ = this.channelService.connectionState$
        .map((state: ConnectionState) => { return ConnectionState[state]; });

      this.channelService.error$.subscribe(
          (error: any) => { console.warn(error); },
          (error: any) => { console.error("errors$ error", error); }
      );

      // Wire up a handler for the starting$ observable to log the
      //  success/fail result
      //
      this.channelService.starting$.subscribe(
          () => { console.log("signalr service has been started"); },
          () => { console.warn("signalr service failed to start!"); }
      );


      }

    ngOnInit(){

       this.messages = [];

      // Start the connection up!
      console.log('Starting the channel service');

      this.channelService.start();

       this.subscription = this.channelService.sub().subscribe(
            (x: string) => {
                    this.messages.push(x);
                    //console.log(x);
                    this.cd.detectChanges();
          }
      ,
      (error: any) => {
          console.warn("Attempt to join channel failed!", error);
      }
    )


    }

    ngOnDestroy(){
        this.subscription.unsubscribe();

    }

    sayHello(message:string){
        console.log("sending: ", message)
       this.channelService.publish(message); 

    }


    
}