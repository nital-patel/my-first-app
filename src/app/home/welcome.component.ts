import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';
import { Welcome } from './welcome';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcome = new Welcome();
  welcomeForm: FormGroup;
  // @ts-ignore
  model = new Employee('priti', 'patel',  'priti@gmail.com' );
  firstNameIdToLowerCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toLowerCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }
  lastNameIdToLowerCase(value: string) {
    if (value.length > 0) {
    this.model.lastName = value.charAt(0).toLowerCase() + value.slice(1);
    } else {
      this.model.lastName = value;
    }
      }
  emailIdLowerCase(value: string) {
    if (value.length <= 0) {
      this.model.email = (value);
    } else {
      this.model.email = (value.charAt(0).toLowerCase() + value.slice(1));
    }
  }

  ngOnInit(): void {
    this.welcomeForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    });
  }
    }
