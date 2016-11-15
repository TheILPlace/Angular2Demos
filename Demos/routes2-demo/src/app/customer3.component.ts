import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Customer } from './model/customer';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from "rxjs/Rx";
import 'rxjs/Rx';

@Component({
  selector: 'app-customer',
  template: `
    <p>
      customer Works!
    </p>
    <br>


<h2>first list</h2>
    <ul>
      <li *ngFor="let myCustomer of myCustomers ">
            {{myCustomer?.lastName }} {{myCustomer?.firstName }} 
      </li>
    </ul>

<h2>second list</h2>

 <ul>
      <li *ngFor="let myCustomer2 of obsMyCustomers | async">
            {{myCustomer2.lastName }} {{myCustomer2.firstName }} 
      </li>
    </ul>
    
    <button (click)="nav()">move to cusotmers2</button>


  `,
  styles: []
})
export class Customer3Component implements OnInit {
constructor(private dataService: DataService,private router: Router, private route: ActivatedRoute) { }


  private myCustomers: Customer[];
  private obsMyCustomers: Observable<Customer[]>;
  
  
nav(){

  //this.router.navigate(['/customer2','555']);
  this.router.navigate(['customer','4']);

}



  ngOnInit() {
    
       this.getData2();
       
  }

 getData(){
    this.dataService.getAllCustomersData()
    .subscribe(
        (data: Customer[]) => {
          this.myCustomers = data;
        }
      );

  }

getData2(){
    let _customersObservable: Observable<Customer[]>;

    _customersObservable = this.dataService.getAllCustomersData2();


    this.obsMyCustomers = _customersObservable;


   _customersObservable.subscribe((data5) => {
      this.myCustomers = data5;
   });

    //this.myCustomers = this.dataService.getAllCustomersData2();


}


}
