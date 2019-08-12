import {Component} from '@angular/core';
import { User } from './login.user';
import { LoginService } from '../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SpringbootService} from '../services/springboot.service';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styleUrls: ['app.login.component.css']
})

export class LoginComponent {
  title = 'Acme Product Management';
  loginMessage: string = null;
  loginSucess = false;
  pageTitle = 'Log In';
  user: User = {
    id: 0,
    firstName: null,
    lastName: null,
    emailId: null,
    password: null,
    streetAddress: null,
    addressType: 'home',
    sendCatalog: false,
    city: null,
    state: null,
    zip: null
  };
  constructor(private loginService: LoginService,
              private routingService: ActivatedRoute,
              private router: Router,
              private springbootService: SpringbootService) {

  }
  loginUser() {
    this.springbootService.getData(this.user).subscribe((returnedUser: User[]) => {
      if (returnedUser != null && returnedUser.length !== 0) {
        this.loginMessage = 'Login succesfully!';
        this.user = returnedUser[0];
        this.loginSucess = true;
        this.router.navigate(['/products']);
      } else {
        this.loginMessage = 'Login Failed';
        this.loginSucess = false;
      }
    });
  }
}

