import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return ["Learning Angular 2", "Pro TypeScript", "ASP.NET"];
    // return [
    //   {
    //     imageUrl: "http://loremflickr.com/150/150?random=1",
    //     productName: "Product 1",
    //     releasedDate: "May 31, 2016",
    //     description: "Cras sit amet nibh libero, in gravida... ",

    //   },
    //   {
    //     imageUrl: "http://loremflickr.com/150/150?random=2",
    //     productName: "Product 2",
    //     releasedDate: "October 31, 2016",
    //     description: "Cras sit amet nibh libero, in gravida... ",

    //   },
    //   {
    //     imageUrl: "http://loremflickr.com/150/150?random=3",
    //     productName: "Product 3",
    //     releasedDate: "July 30, 2016",
    //     description: "Cras sit amet nibh libero, in gravida... ",

    //   }
    // ];
  }


}
