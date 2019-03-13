import { Component } from '@angular/core';
import { IProduct} from './product';
import {buffer} from 'rxjs/operators';
import {promise} from 'selenium-webdriver';

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
  _listFilter: string;
  filteredProducts: IProduct[];
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(vaule:string) {
    this._listFilter = vaule;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
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
  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
