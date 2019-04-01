import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import { Router} from '@angular/router';
import { User} from '../login/login.user';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private userAddError: boolean;
  constructor(private loginService: LoginService,
              private router: Router) {
  }
  myUsers: User[] = [];
  newUser: User = new User(0, 'null', 'null', 'null');
  // @ts-ignore
  user: User = {
    id: 0,
    userName: null,
    emailId: null,
    password: null,
  };
  // @ts-ignore
  userForm: FormGroup;
  addUser(userForm) {
    console.log(this.userForm);
    this.newUser.id = userForm.id + 1;
    this.newUser.userName = userForm.userName;
    this.newUser.emailId = userForm.emailId;
    this.newUser.password = userForm.password;
    this.loginService.addNewUser(this.newUser).subscribe(
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
}

