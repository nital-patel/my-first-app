import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// @ts-ignore
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }
  getMyProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("http://localhost:3000/IProduct");
  }
}
