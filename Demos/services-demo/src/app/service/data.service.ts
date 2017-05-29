import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './log.service';


// we need @Injectable in cases we inject services into OUR service
// in this case, we inject the LogService
@Injectable()
export class DataService {
    distributedData = new EventEmitter<string>();

    private savedData: string[] = [];

    // inject and initiate the logService variable
    constructor(private logService: LogService) {}

    addData(input: string) {
        // push the input into the local array
        this.savedData.push(input);
        // call the writeToLog in the logService
        this.logService.writeToLog('Saved item: ' + input);
    }

    getData() {
        // return the data variable that is stored in this service
        return this.savedData;
    }

    // throw an event with the value that user entered
    sendData(value: string) {
        this.distributedData.emit(value);
    }
}



