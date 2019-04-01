import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { LoginService } from '../services/login.service';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forChild([
      {path: 'login' , component: LoginComponent},
    ])
  ],
  providers: [LoginService]
})
export class LoginModule {

}
