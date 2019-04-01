import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/login.service';
import { Router} from '@angular/router';
import { User} from '../login/login.user';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) {
  }
  // @ts-ignore
  user: User = {
    userName: null,
    emailId: null,
    password: null,
  };
  userForm: FormGroup;
  userNameToLowerCase(value: string) {
    if (value.length > 0) {
      this.user.userName = value.charAt(0).toLowerCase() + value.slice(1);
    } else {
      this.user.userName = value;
    }
  }
  emailIdToLowerCase(value: string) {
    if (value.length > 0) {
      this.user.emailId = value.charAt(0).toLowerCase() + value.slice(1);
    } else {
      this.user.emailId = value;
    }
  }
  passwordLowerCase(value: string) {
    if (value.length > 0) {
      this.user.password = (value);
    } else {
      this.user.password = (value.charAt(0).toLowerCase() + value.slice(1));
    }
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(),
      userName: new FormControl(),
      emailId: new FormControl(),
      password: new FormControl()
    });
  }
  populateTestData(): void {
    this.userForm.patchValue({
      id: '1',
      userName: 'priti',
      emailid: 'priti@gmail.com',
      password: 'sadhit'
    });
  }
  registerUser(userForm: NgForm) {
    console.log(userForm.form);
    console.log('Saved: ' + JSON.stringify(userForm.value));
  }
}

