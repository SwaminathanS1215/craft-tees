import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { userDetails } from '../app.component';
import { ProductsService } from '../utils/service/products.service';
// Product Interface
import { Products } from './Products';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css', '../app.component.css']
})
export class ProductsComponent implements OnInit {

    loggedInUser!: userDetails;
    // Product Data
    productsData: Array<Products> = [];
    productsForFilter: Array<Products> = [];

    // filter attributes
    filterByMale: boolean = false;
    filterByFemale: boolean = false;

    // font awesome icons
    icons = {
        userCircle: faUserCircle
    };

    constructor(private router: Router, private productsService: ProductsService) {
        this.loggedInUser = JSON.parse(sessionStorage.getItem('users')!)[0];
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
        this.router.navigateByUrl('/');
    }

}
