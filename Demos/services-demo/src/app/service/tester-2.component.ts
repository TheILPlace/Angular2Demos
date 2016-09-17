import { Component, OnInit } from '@angular/core';

import { LogService } from './log.service';
import { DataService } from './data.service';

@Component({
    selector: 'tester-2',
    template: `
    <div class="bg-success">
        <br>
        <div>
        <input type="text" #input>
        <button (click)="onLog(input.value)">Log</button>
        <button (click)="onStore(input.value)">Store</button>
        </div>
        <hr>
        <div>
            <button (click)="onGet()">Refresh Storage</button>
            <h3>Storage (in DataService)</h3>
            <ul>
                <li *ngFor="let item of items">{{item}}</li>
            </ul>
            <h3>Received Value from component 1</h3>
            <p>{{receivedValue}}</p>
        </div>
    </div>
  `
})
export class Tester2Component implements OnInit {
    receivedValue = '';
    items: string[] = [];

    constructor (private logService: LogService, private dataService: DataService) {}

    onLog(value: string) {
        this.logService.writeToLog(value);
    }

    onStore(value: string) {
        this.dataService.addData(value);
    }


    onGet() {
        // we use .slice(0) just to create a NEW array and not get 
       //a pointer to the data in the dataService
        this.items = this.dataService.getData();
    }

    ngOnInit() {
        //subscribe to the event that the dataService Emits !
        this.dataService.distributedData.subscribe(
            data => this.receivedValue = data
        );
    }
}
