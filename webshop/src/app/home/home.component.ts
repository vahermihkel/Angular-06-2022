import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  private productDbUrl = "https://angular-06-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  constructor(private _toastService: ToastService, 
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.productDbUrl).subscribe(productsFromDb => this.products = productsFromDb);
  }

  addToCart(product: any) {
    // console.log(product);
    let cart = [];
    const cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
      cart = JSON.parse(cartSS);
    }
    cart.push(product); // [{1},{1}] --> [{product: {1}, quantity: 1}]
    sessionStorage.setItem("cart", JSON.stringify(cart));
    this._toastService.success('Edukalt ostukorvi lisatud');
  }

  sortAZ() {
    this.products.sort((a,b) => a.name.localeCompare(b.name));
  }

  sortZA() {
    this.products.sort((a,b) => b.name.localeCompare(a.name));
  }

  sortPriceAsc() {
    this.products.sort((a,b) => a.price - b.price);
  }

  sortPriceDesc() {
    this.products.sort((a,b) => b.price - a.price);
  }
}

// Muuda Toode   SingleProduct järgi, [formGroup]
// Lisa Toode    eesti keelse järgi, ngForm
// ID kontroll   lisamisel ja muutmisel kontrollitakse, kas kellelgi on sama ID
// Toodete haldamisel otsing   [  me   ]   240 

// Avalehel kategooriad - vajutad kategooria peale, näitab ainult selle kategooria tooteid
// Kategooriate valimine Dropdown menüüst kui lisan või muudan
// Kategooriad ka andmebaasi - võimaldame kategooriaid lisada, vaadata, kustutada
// Kaardirakenduse - võimaldaks vaadata meie poode Eesti kaardil (nagu G Maps - Leaflet)
// Ostukorv - kogustega
// Omniva pakiautomaadid kasutusele
// Ostukorvi kujundus
// E-maili saatmine - tagasiside / tellimus on tehtud
// Number Navbari

// Nortali proovitöö e-mailile

// Iseseisev projekt 

// ??????
// Piltide üleslaadimist Firebase
// Karusell-galerii kasutuselevõtt