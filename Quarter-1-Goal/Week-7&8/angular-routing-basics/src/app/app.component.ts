import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routing';

  constructor(private router: Router) {

  }
  // changing the route programatically
  // To navigate programmatically we will need an angular router to be imported which is the “Router” class provided by Angular. 
  //So that we can tell angular to navigate to a particular route by calling its navigate method.
  viewProduct() {
    this.router.navigate(['/product'])
  }

  sendQueryParams() {
    this.router.navigate(['/product'], { queryParams: { access: 1 } })
  }
}
