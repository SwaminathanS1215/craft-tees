import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { cart } from '../serverURL';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  URL = cart;

  constructor(private http: HttpClient) { }

  // Function to get items from cart
  getCartItems(cartId: number): Observable<any> {
    let requestURL: string = this.URL + "/" +cartId;

    return this.http.get(requestURL);
  }

  // Function to delete item from cart
  deleteCartIem(cartId: number): Observable<any> {
    let requestURL: string = this.URL + "/" + cartId;

    return this.http.delete(requestURL);
  }
}
