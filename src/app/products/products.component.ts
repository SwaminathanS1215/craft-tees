import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faUserCircle,
  faStar,
  faCartPlus,
  faCheck,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons'
import { userDetails } from '../app.component';
import { CartItem } from '../cart/cart.component';
import { ProductsService } from '../utils/service/products.service';
// Product Interface
import { Products } from './Products';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css', '../app.component.css'],
  animations: [
    trigger('EnterLeave', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('1s')
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)' }),
        animate('1s')
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {

  loggedInUser!: userDetails;
  // Product Data
  productsData: Array<Products> = [];
  productsForFilter: Array<Products> = [];
  showAllProducts = true;
  activeProduct!: Products;
  selectedSize: string = 'S';
  addedToCart = false;
  itemsInCart: Array<CartItem> = [];

  // filter attributes
  filterByMale: boolean = false;
  filterByFemale: boolean = false;

  // font awesome icons
  icons = {
    userCircle: faUserCircle,
    star: faStar,
    cartPlus: faCartPlus,
    check: faCheck,
    cartShopping: faCartShopping
  };

  constructor(private router: Router, private productsService: ProductsService) {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('users')!)[0];
    if (JSON.parse(sessionStorage.getItem('itemsInCart')!)) {
      this.itemsInCart = JSON.parse(sessionStorage.getItem('itemsInCart')!);
    }
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe({
      next: (data: Products[]) => {
        this.productsData = data;
        this.productsForFilter = data;
      },
      error: (err) => {
        alert(err);
      }
    })
  }

  doLogout() {
    sessionStorage.removeItem('loggedInUser');
    sessionStorage.removeItem('itemsInCart');
    this.router.navigateByUrl('/');
  }

  showParticularProduct(displayKey: boolean, product: Products) {
    this.showAllProducts = displayKey;
    this.activeProduct = product;
  }

  onSizeChange(size: string) {
    this.selectedSize = size;
  }

  addToCart() {
    this.addedToCart = true;
    let productAddedtoCart = [{
      product: this.activeProduct,
      size: this.selectedSize
    }]
    if (this.itemsInCart) {
      this.itemsInCart.push(productAddedtoCart[0]);
      sessionStorage.setItem('itemsInCart', JSON.stringify(this.itemsInCart));
    } else {
      sessionStorage.setItem('itemsInCart', JSON.stringify(productAddedtoCart));
    }
    this.router.navigateByUrl('/cart')
  }
}
