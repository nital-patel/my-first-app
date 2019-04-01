import { Component, OnInit } from '@angular/core';
import { IProduct} from './product';
import { ProductService } from '../services/product.service';
import {UserService} from '../services/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  _listFilter: string;
   pageTitle: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(vaule: string) {
    this._listFilter = vaule;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  constructor(private productService: ProductService,
              private user: UserService) {
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
     this.productService.getMyProducts().subscribe(
       (products: IProduct[]) => {
       this.products = products;
       this.filteredProducts = this.products;
       console.log(products);
    });
  }
  logOut() {
  }
}
