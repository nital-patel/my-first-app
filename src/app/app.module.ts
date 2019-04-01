import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { StarComponent } from './products/shared/star.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductdetailModule } from './products/product-detail/productdetail.module';
import { BasNavbarComponent } from './bas-navbar/bas-navbar.component';
import {BasNavbarModule} from './bas-navbar/bas-navbar.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginComponent,
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
    ProductdetailModule,
      RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id/edit', component: ProductDetailComponent},
      {path: 'login' , component: LoginComponent},
        {path: 'signup', component: SignupComponent},
        {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        {path: '', component: BasNavbarComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

