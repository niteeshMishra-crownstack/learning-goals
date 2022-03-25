import { Component } from '@angular/core';
import { AuthService } from './services/gaurds/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routing';
  constructor(private authService: AuthService) { }

  userLoggedIn() {
    this.authService.login()
    alert("Congrats!! You have loggedin successfully")

  }

  userLoggedOut() {
    this.authService.logout()
    alert("Logout Successfully!!!")
  }
}
