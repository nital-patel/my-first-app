import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { StarComponent } from './products/shared/star.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductdetailModule } from './products/product-detail/productdetail.module';
import { BasNavbarComponent } from './bas-navbar/bas-navbar.component';
import {BasNavbarModule} from './bas-navbar/bas-navbar.module';
import { SignupComponent } from './signup/signup.component';
import {ReactiveErrors} from '@angular/forms/src/directives/reactive_errors';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailComponent,
    BasNavbarComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    HttpClientModule,
    BasNavbarModule,
    ReactiveFormsModule,
    ProductdetailModule,
      RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id/edit', component: ProductDetailComponent},
        {path: 'signup', component: SignupComponent},
        {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        {path: '', component: BasNavbarComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

