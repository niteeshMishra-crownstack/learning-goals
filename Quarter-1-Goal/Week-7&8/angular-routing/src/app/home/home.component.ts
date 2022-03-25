import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickForAlert() {
    //perform some logic
    //move to another page
    alert("Here is your alert")
    this.router.navigate(['/users'], { queryParams: { page: 1, search: 'niteesh' } })
    // this.router.navigateByUrl('/users')


  }
}
