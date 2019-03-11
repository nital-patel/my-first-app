import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [],
})
export class LoginModule {

}
