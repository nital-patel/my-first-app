import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import { Router} from '@angular/router';
import { User} from '../login/login.user';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {SpringbootService} from '../services/springboot.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  private userAddError: boolean;
  constructor(private loginService: LoginService,
              private router: Router,
              private springbootService: SpringbootService) {
  }
  myUsers: User[] = [];
  newUser: User = new User(0,  'null', 'null', 'null', 'null ', 'null', 'home', 'null', 'null', null);
  // @ts-ignore
  user: User = {
    id: 0,
    firstName: null,
    lastName: null,
    emailId: null,
    password: null,
    streetAddress: null,
    addressType: 'home',
    city: null,
    state: null,
    zip: null

  };
  // @ts-ignore
  userForm: FormGroup;
  addUser(userForm) {

    console.log(this.user);
    this.newUser.firstName = userForm.firstName;
    this.newUser.lastName = userForm.lastName;
    this.newUser.emailId = userForm.emailId;
    this.newUser.password = userForm.password;
    this.newUser.streetAddress = userForm.streetAddress;
    this.newUser.addressType = this.user.addressType;
    this.newUser.city = this.user.city;
    this.newUser.state = this.user.state;
    this.newUser.zip = this.user.zip;


    this.springbootService.addnewUser(this.newUser).subscribe(
      (addedUser: User) => {
        this.myUsers.push(addedUser);
        this.userAddError = false;
        console.log(this.newUser);
      },
      error => {
        console.log('Error');
        this.userAddError = true;
      }
    );
  }

}

