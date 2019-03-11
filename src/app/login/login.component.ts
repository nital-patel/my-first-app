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
  constructor(private userService : UserService) {

  }
loginUser() {
  this.userService.validateUser(this.user).subscribe((returnedUser: User[]) =>{
    if(returnedUser != null && returnedUser.length != 0) {
      this.loginMessage = "Logged in succesfully!"
      this.user = returnedUser[0];
      this.loginSucess = true;
    } else {
      this.loginMessage = "Login Failed";
      this.loginSucess = false;
    }
  })
}
}
