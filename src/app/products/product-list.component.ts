import { Component } from '@angular/core';
import { IProduct} from './product';
import {buffer} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN 0023',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rooling garden card',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.QZDOqe-3GtduDpvzL6T_ggHaHa&pid=15.1&P=0&w=300&h=300'
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX 0048',
      releaseDate: 'may 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: ''
    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
