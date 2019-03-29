import {Component} from '@angular/core';
import { User } from './login.user';
import { UserService } from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styleUrls: ['app.login.component.css']
})

export class LoginComponent {
  loginMessage: string = null;
  loginSucess = false;
  user: User = {
    id: 0,
    name: null,
    emailID: null,
    password: null,
  };
  constructor(private userService: UserService,
              private router: Router) {

  }
  loginUser() {
    this.userService.validateUser(this.user).subscribe((returnedUser: User[]) => {
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
