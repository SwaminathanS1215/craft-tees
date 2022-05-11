import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDetails } from '../app.component';

import {
  faUserCircle,
  faCartShopping,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
import { Products } from '../products/Products';

export interface CartItem {
  product: Products;
  size: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', '../app.component.css']
})
export class CartComponent implements OnInit {
  // class attributes
  loggedInUser!: userDetails;
  cartItems: Array<CartItem> = []

  // font awesome icons
  icons = {
    userCircle: faUserCircle,
    cartShopping: faCartShopping,
    delete: faTrash
  };

  constructor(private router: Router) {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('users')!)[0];
    if (JSON.parse(sessionStorage.getItem('itemsInCart')!)) {
      this.cartItems = JSON.parse(sessionStorage.getItem('itemsInCart')!);
    }
  }

  ngOnInit(): void {
  }

  doLogout() {
    sessionStorage.removeItem('loggedInUser');
    sessionStorage.removeItem('itemsInCart');
    this.router.navigateByUrl('/');
  }

}
