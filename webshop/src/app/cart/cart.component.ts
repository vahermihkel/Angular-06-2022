import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
      this.cart = JSON.parse(cartSS);
    }
  }

}
