import { Component } from '@angular/core';
import {buffer} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  products: any[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rooling garden card',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.QZDOqe-3GtduDpvzL6T_ggHaHa&pid=15.1&P=0&w=300&h=300'
    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
