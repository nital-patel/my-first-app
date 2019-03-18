import { Component, OnInit } from '@angular/core';
import { IProduct} from './product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List!';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(vaule: string) {
    this._listFilter = vaule;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
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
     this.productService.getMyProducts().subscribe((products: IProduct[]) => {
       this.products = products;
       console.log(products);
    });
    //this.filteredProducts = this.products;
  }
}
