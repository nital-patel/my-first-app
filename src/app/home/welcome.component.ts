import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('priti', 'patel', true, 'w2', 'default');
  hasPrimaryLanguageError = false;
  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
    this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
      }
  lastnameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.lastName = value;
    }
  }

  ngOnInit(): void {
  }
    }
