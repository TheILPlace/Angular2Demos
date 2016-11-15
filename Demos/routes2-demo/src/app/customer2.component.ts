import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Customer } from './model/customer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer',
  template: `
    <p>
      customer Works!
    </p>
    <br>
    {{myCustomer?.lastName }} {{myCustomer?.firstName }} from resove
    <br>
    {{firstName  }} is here


  `,
  styles: []
})
export class Customer2Component implements OnInit {
constructor(private route: ActivatedRoute) { }


  private myCustomer: Customer;
  
  private firstName:string;

  ngOnInit() {
    
        this.myCustomer = this.route.snapshot.data['resCustomer'];
        this.firstName = this.myCustomer.firstName;
  }

  

//   showme(){
//     alert(this.xcustomer.firstName);


//   }


}
