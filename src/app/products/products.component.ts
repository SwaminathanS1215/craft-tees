import { Component, OnInit } from '@angular/core';

import { 
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css', '../app.component.css']
})
export class ProductsComponent implements OnInit {

  // font awesome icons
  icons = {
    userCircle: faUserCircle
};

  constructor() { }

  ngOnInit(): void {
  }

}
