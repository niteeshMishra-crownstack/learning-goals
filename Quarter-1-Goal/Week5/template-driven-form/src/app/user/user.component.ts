import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserServiceService } from '../user-service.service';
import { Profile } from '../domain/Profile';
import { User } from '../domain/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isValidFormSubmitted = false;
  allProfiles: Profile[];
  initialProfileVal = null;
  constructor(private userService: UserServiceService) { }
  ngOnInit(): void {
    this.allProfiles = this.userService.getPofiles();
  }
  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.valid) {
      this.isValidFormSubmitted = true;
    } else {
      return;
    }
    let newUser: User = form.value;
    this.userService.createUser(newUser);
    this.resetUserForm(form);
  }
  resetUserForm(form: NgForm) {
    form.resetForm();
    this.initialProfileVal = null;
  }
  setDefaultValues(form: NgForm) {
    let user = new User();
    user.userName = "Niteesh Mishra";
    user.age = 25;
    user.gender = 'male';
    user.isMarried = false;
    user.profile = this.allProfiles[2];
    user.isTCAccepted = true;
    form.setValue(user);
  }


}
