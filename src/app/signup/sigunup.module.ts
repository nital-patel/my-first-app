import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {UserService} from '../services/login.service';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [UserService]
})
export class WelcomeModule {

}
