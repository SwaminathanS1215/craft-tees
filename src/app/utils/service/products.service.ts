import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from '../serverURL';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL: string = products;

  constructor(private http: HttpClient) { }

  // This function will get all the products
  getAllProducts(): Observable<any> {
    return this.http.get(this.URL);
  }

  // This function will get the product by Product Id
  getProductById(productId: any): Observable<any> {
    // modify the URL to get the product by Id
    let urlRequest = URL + '/' + productId;

    return this.http.get(urlRequest);
  }
}
