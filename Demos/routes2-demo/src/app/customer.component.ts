import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Customer } from './model/customer';

@Component({
  selector: 'app-customer',
  template: `
    <p>
      customer Works!
    </p>
    {{firstName  }} is here


    

<button (click)="getData();">Get Data</button>
    <button (click)="showme();">show me</button>

  `,
  styles: []
})
export class CustomerComponent implements OnInit {

  constructor(private dataService: DataService) { }

  private myCustomer: any;
  private xcustomer:any;
  private firstName:string;

  ngOnInit() {
    this.dataService.getCustomerData(1)
    .subscribe(
        data => {
          this.myCustomer = data;
          this.firstName=this.myCustomer.firstName;
        }
      );



  }

  getData(){
    this.dataService.getCustomerData(1)
    .subscribe(
        data => {
          this.xcustomer = data;
        }
      );

  }

  showme(){
    alert(this.xcustomer.firstName);


  }


}
