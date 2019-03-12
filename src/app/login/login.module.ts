import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { UserService } from '../services/login.service';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [UserService],
  exports: [LoginComponent]
})
export class LoginModule {

}
