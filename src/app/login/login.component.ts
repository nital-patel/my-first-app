import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styleUrls: ['app.login.component.css']
})

export class LoginComponent {
  User = {
    id: 0,
    name: null,
    emailID: null,
    password: null,
  };
}
