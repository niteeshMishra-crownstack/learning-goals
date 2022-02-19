import { Component, OnInit } from '@angular/core';
import { WebserviceService } from './webservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular pipes example';
  msg = "Welcome to Angular"
  text = "custom pipe example"
  cur: number = 175;
  toDate: Date = new Date();
  data = []

  randomName = ["ravi", "kishan", "jeet", "sunny", "kapil"]

  constructor(private service: WebserviceService) { }

  ngOnInit() {
    console.log("kvdsv")
    this.service.getTodos().subscribe(x => {
      console.log(x)
      this.data = x
      console.log(this.data)
    })
  }
}
