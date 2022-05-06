import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<any> {
    return this.http.get(this.URL);
}
}