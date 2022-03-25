import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer =
    {
      customerId: '',
      customerName: ''
    }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //subscribing params to fetch the route parameters data
    this.route.params.subscribe((param: Params) => {
      console.log(param)
      this.customer.customerId = param.id
      this.customer.customerName = param.name
    })
    console.log(this.customer)
  }





}
