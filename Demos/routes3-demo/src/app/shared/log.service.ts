import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }
  
  
  
writeToLog(logMessage: string) {
      console.log(logMessage);
  }
}
