export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

export class Product {
  productName: any;
  productCode: boolean;
  category: boolean;
  id: number;
}
export interface ProductResolved {
  product: Product;
  error?: any;
}
