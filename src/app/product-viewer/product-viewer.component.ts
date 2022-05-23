import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../products/Products';
import { ProductsService } from '../utils/service/products.service';

@Component({
  selector: 'app-product-viewer',
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.css']
})
export class ProductViewerComponent implements OnInit {
  // class attributes
  product!: Products;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let productId = param.get('productId');

      // invoke product service to get the product by ID
      this.productService.getProductById(productId).subscribe({
        next: (product: Products) => {
          this.product = product;
        },
        error: (err) => {
          console.error(err);
        }
      })
    })
  }

}
