import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/login.service';
import { Router} from '@angular/router';
import { User} from '../login/login.user';
import {FormControl, FormGroup} from '@angular/forms';
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
  user = new User();
  userForm: FormGroup;
  model = new Employee('null', 'null',  'null' );
  userNameToLowerCase(value: string) {
    if (value.length > 0) {
      this.model.userName = value.charAt(0).toLowerCase() + value.slice(1);
    } else {
      this.model.userName = value;
    }
  }
  emailIdToLowerCase(value: string) {
    if (value.length > 0) {
      this.model.emailId = value.charAt(0).toLowerCase() + value.slice(1);
    } else {
      this.model.emailId = value;
    }
  }
  passwordLowerCase(value: string) {
    if (value.length > 0) {
      this.model.password = (value);
    } else {
      this.model.password = (value.charAt(0).toLowerCase() + value.slice(1));
    }
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userName: new FormControl(),
      emailId: new FormControl(),
      password: new FormControl()
    });
  }
  registerUser(signUpForm) {
    console.log(signUpForm);
  }
}

