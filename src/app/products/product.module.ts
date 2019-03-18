import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ProductService} from '../services/product.service';
import {ProductListComponent} from './product-list.component';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [ProductService]
})
export class ProductModule {

}
