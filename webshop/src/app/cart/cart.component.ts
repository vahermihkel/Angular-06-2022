import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';
import { ParcelMachineService } from '../services/parcel-machine.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartProduct[] = [];
  cartSum = 0;
  parcelMachines: any = [];

  constructor(private parcelMachineService: ParcelMachineService) { }

  ngOnInit(): void {
    this.parcelMachineService.getParcelMachines().subscribe(parcelMachines => {
      this.parcelMachines = parcelMachines.filter(element => element.A0_NAME === "EE");
    })

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
