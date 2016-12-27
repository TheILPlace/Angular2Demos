import { Component, OnInit,OnDestroy,  ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Signalr2Service, ConnectionState } from './signalr2.service'

@Component({
  selector: 'signalr2-tester',
  templateUrl: './signalr2-client-tester-component.html',
  styles: []
})
export class Signalr2ClientTesterComponent implements OnInit{
    // An internal "copy" of the connection state stream used because
    //  we want to map the values of the original stream. If we didn't 
    //  need to do that then we could use the service's observable 
    //  right in the template.
    //   
    connectionState$: Observable<string>;
    connectionState2: string;

    messages: string[] ;
    subscription: any;



    constructor(private signalr2Service: Signalr2Service,
    private cd: ChangeDetectorRef) {
      
      
      
      // Let's wire up to the signalr observables
 

       this.signalr2Service.connectionState$.subscribe(
           (state: ConnectionState) => { 
             
             this.connectionState2 = ConnectionState[state]; 
             this.cd.detectChanges();
             }
       ) 


      this.signalr2Service.error$.subscribe(
          (error: any) => { console.warn(error); },
          (error: any) => { console.error("errors$ error", error); }
      );

      // Wire up a handler for the starting$ observable to log the
      //  success/fail result
      //
      this.signalr2Service.starting$.subscribe(
          () => { console.log("signalr service has been started"); },
          () => { console.warn("signalr service failed to start!"); }
      );


      }

    ngOnInit(){

       this.messages = [];

      // Start the connection up!
      console.log('Starting the channel service');

      this.signalr2Service.start();

       this.subscription = this.signalr2Service.hello.subscribe(
            (x: string) => {
                    this.messages.push(x);
                    //console.log(x);
                    this.cd.detectChanges();
          }
      ,
      (error: any) => {
          console.warn("Attempt to subscribe to hello failed!", error);
      }
    )


    }

    ngOnDestroy(){
        this.subscription.unsubscribe();

    }

    sayHello(message:string){
        console.log("sending: ", message)
       this.signalr2Service.publish(message); 

    }


    
}