
import {Injectable, Inject,EventEmitter} from "@angular/core";  
import {Subject} from "rxjs/Subject";  
import {Observable} from "rxjs/Observable";

declare var $: any;

/**
 * When SignalR runs it will add functions to the global $ variable 
 * that you use to create connections to the hub.
 */

export enum ConnectionState {  
    Connecting = 1,
    Connected = 2,
    Reconnecting = 3,
    Disconnected = 4
}

export class ChannelConfig {  
    url: string;
    hubName: string;
    
}

@Injectable()
export class Signalr2Service {

    /**
     * starting$ is an observable available to know if the signalr 
     * connection is ready or not. On a successful connection this
     * stream will emit a value.
     */
    starting$: Observable<any>;
    //signalRSubject: Subject<string>;

    /**
     * connectionState$ provides the current state of the underlying
     * connection as an observable stream.
     */
    connectionState$: Observable<ConnectionState>;

    /**
     * error$ provides a stream of any error messages that occur on the 
     * SignalR connection
     */
    error$: Observable<string>;

    // These are used to feed the public observables 
    //
    private connectionStateSubject = new Subject<ConnectionState>();
    private startingSubject = new Subject<any>();
    private errorSubject = new Subject<any>();

    // These are used to track the internal SignalR state 
    //
    private hubConnection: any;
    private hubProxy: any;

   public hello: EventEmitter<any>;

    constructor(
      
      @Inject("channel.config") private channelConfig: ChannelConfig
    ) 
    { 
        let mainwindow = $;
        this.hello = new EventEmitter();




        if ($ === undefined || $.hubConnection === undefined)
        {
            throw new Error("The variable '$' or the .hubConnection() function are not defined...please check the SignalR scripts have been loaded properly");
        }

        // Set up our observables
        //
        this.connectionState$ = this.connectionStateSubject.asObservable();
        this.error$ = this.errorSubject.asObservable();
        this.starting$ = this.startingSubject.asObservable();

        this.hubConnection = $.hubConnection();
        this.hubConnection.url = channelConfig.url;
        this.hubProxy = this.hubConnection.createHubProxy(channelConfig.hubName);

        // Define handlers for the connection state events
        //
        this.hubConnection.stateChanged((state: any) => {
            let newState = ConnectionState.Connecting;

            switch (state.newState) {
                case $.signalR.connectionState.connecting:
                    newState = ConnectionState.Connecting;
                    break;
                case $.signalR.connectionState.connected:
                    newState = ConnectionState.Connected;
                    break;
                case $.signalR.connectionState.reconnecting:
                    newState = ConnectionState.Reconnecting;
                    break;
                case $.signalR.connectionState.disconnected:
                    newState = ConnectionState.Disconnected;
                    break;
            }

            // Push the new state on our subject
            //
            this.connectionStateSubject.next(newState);

            if (newState ===ConnectionState.Disconnected)
            {
                    setTimeout(() => {
                       this.start();
                 }, 5000); // retry to connect every 5 seconds.
                    
            }

        });

        // Define handlers for any errors
        //
        this.hubConnection.error((error: any) => {
            // Push the error on our subject
            //
            this.errorSubject.next(error);
        });


         this.registerOnServerEvents();

    }

     registerOnServerEvents(): void {
        this.hubProxy.on("hello", (incomingMessage:string) => {
            this.hello.emit(incomingMessage);
        });
     }



    /**
     * Start the SignalR connection. The starting$ stream will emit an 
     * event if the connection is established, otherwise it will emit an
     * error.
     */
    start(): void {
        // Now we only want the connection started once, so we have a special
        //  starting$ observable that clients can subscribe to know know if
        //  if the startup sequence is done.
        //
        // If we just mapped the start() promise to an observable, then any time
        //  a client subscried to it the start sequence would be triggered
        //  again since it's a cold observable.
        //
        this.hubConnection.start()
            .done(() => {
                this.startingSubject.next();
            })
            .fail((error: any) => {
                this.startingSubject.error(error);
            });
    }

   
    //sample call to a server method//
    publish(myMessage: string): void {
        this.hubProxy.invoke("SendHello", myMessage);
    }

}