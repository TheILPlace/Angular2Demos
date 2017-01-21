import { Injectable } from '@angular/core';
import { ICustomer } from '../interfaces/ICustomer';



@Injectable()
export class TrackByService {
  
  customer(index: number, customer: ICustomer) {
    return customer._id;
  }
  
}