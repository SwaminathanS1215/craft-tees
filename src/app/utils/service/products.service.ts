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

  getAllProducts() : Observable<any> {
    return this.http.get(this.URL);
}
}
