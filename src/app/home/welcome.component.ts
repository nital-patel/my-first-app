import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  languages = ['English', 'Spanish', 'Other'];
  // @ts-ignore
  model = new Employee('priti', 'priti@gmail.com',  '12344' );
  hasPrimaryLanguageError = false;
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
  passwordToLowerCase(value: string) {
    if (value.length <= 0) {
      this.model.password = Number(value);
    } else {
      this.model.password = Number(value.charAt(0).toLowerCase() + value.slice(1));
    }
  }

  ngOnInit(): void {
  }
    }
