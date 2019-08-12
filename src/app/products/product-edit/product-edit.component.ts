import {Component, OnInit} from '@angular/core';


import {Product} from '../product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title = 'Acme Product Management';
  pageTitle = 'Product Edit';
  errorMessage: string;

  product: Product;

  constructor(private productService: ProductService) {
  }

  getMyProducts(id: number): void {
    const {getMyProducts} = this.productService;
    // @ts-ignore
    getMyProducts(id)
      .subscribe(
      );
  }

  onProductRetrieved(product: Product): void {
    this.product = product;
  }

  ngOnInit(): void {
  }

}
