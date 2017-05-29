import { Component } from '@angular/core';

import { LogService } from './log.service';
import { DataService } from './data.service';

@Component({
    selector: 'tester-1',
    template: `
    <div class="bg-info">
    <br>
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage (in DataService)</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
    </div>
  `
})
export class Tester1Component {
    value = '';
    items: string[] = [];

    // inject the LogService and the DataService
    constructor (private logService: LogService, private dataService: DataService) {}

    onLog(value: string) {
        this.logService.writeToLog(value);

    }

    onStore(value: string) {
        this.dataService.addData(value);
    }

    onGet() {
       // we can use .slice(0) just to create a NEW array and not get 
       // a pointer to the data in the dataService
       this.items = this.dataService.getData();
    }

    onSend(value: string) {
        this.dataService.sendData(value);
    }
}
