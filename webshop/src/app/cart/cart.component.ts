import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartProduct[] = [];
  cartSum = 0;

  constructor() { }

  ngOnInit(): void {
    const cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
      this.cart = JSON.parse(cartSS);
    }
    this.calculateCartSum();
  }

  decreaseQuantity(cartProduct: CartProduct) {
    //cartProduct.quantity = cartProduct.quantity - 1;
    cartProduct.quantity--;
    if (cartProduct.quantity <= 0) {
      this.removeProduct(cartProduct);
    }
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
    this.calculateCartSum();
  }

  increaseQuantity(cartProduct: CartProduct) {
    cartProduct.quantity++;
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
    this.calculateCartSum();
  }

  removeProduct(cartProduct: CartProduct) {
    const index = this.cart.indexOf(cartProduct);
    this.cart.splice(index,1);
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
    this.calculateCartSum();
  }

  calculateCartSum() {
    this.cartSum = 0;
    this.cart.forEach(element => this.cartSum = this.cartSum + element.product.price * element.quantity);
  }

}
