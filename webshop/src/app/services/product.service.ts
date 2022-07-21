import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productDbUrl = "https://angular-06-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  constructor(private http: HttpClient) { }

  getProductsFromDb() {
    return this.http.get<Product[]>(this.productDbUrl);
  }

  saveProductsToDb(newProducts: Product[]) {
    return this.http.put(this.productDbUrl, newProducts);
  }
}
