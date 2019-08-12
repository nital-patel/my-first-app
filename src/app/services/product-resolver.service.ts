import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ProductResolved} from '../products/product';
import {Observable, of} from 'rxjs';
import {ProductService} from './product.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResolved> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ProductResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Product id was not a number: ${id}`;
      console.error(message);
      return of({product: null, error: message });
    }
    const {getMyProducts} = this.productService;
    // @ts-ignore
    return getMyProducts(+id)
      .pipe(
        map(product => ({ Product: product })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ product: null, error: message });
        })
      );
  }

}

export class ProductResolverService {
}
