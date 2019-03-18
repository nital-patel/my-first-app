import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from './login/login.module';
import {StarComponent} from './products/shared/star.component';
import {ProductModule} from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

