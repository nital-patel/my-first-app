import { Component } from '@angular/core';
import {buffer} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle = 'Product List!';
  products: any[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rooling garden card',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/516j-2pyjEL.jpg'
    }
  ];
}
