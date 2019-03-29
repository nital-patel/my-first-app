import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { UserService } from '../services/login.service';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forChild([
    ])
  ],
  providers: [UserService]
})
export class LoginModule {

}
