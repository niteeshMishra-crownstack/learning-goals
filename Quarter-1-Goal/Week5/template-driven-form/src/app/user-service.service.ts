import { Injectable } from '@angular/core';
import { Profile } from './domain/profile';
import { Technology } from './domain/technology';
import { User } from './domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getPofiles(): Profile[] {
    let profiles = [
      new Profile('dev', 'Developer'),
      new Profile('man', 'Manager'),
      new Profile('dir', 'Director')
    ]
    return profiles;
  }

  createUser(user: User) {
    //Log user data in console
    console.log("User Name: " + user.userName);
    console.log("User age: " + user.age);
    console.log("Profile Id: " + user.profile.prId);
    console.log("Profile Name: " + user.profile.prName);

    console.log("Gender: " + user.gender);
    console.log("Married: " + user.isMarried);
    console.log("T & C Accepted: " + user.isTCAccepted);
  }
}
