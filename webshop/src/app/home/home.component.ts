import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // 1. võtta kõikide toodete küljest kategooria   [{}, {}, {}].map()  -- ["", "", ""]
  // 2. võtta korduvad kategooriad ära ["", ""]
  // 3. kuvame HTMLs ngFor abil

  kuupaev = new Date();
  protsent = 0.5;
  number = 123123;
  tekst = "elas Metsas mutionu";

  selectedCategory = "all";
  categories: string[] = [];
  products: Product[] = [];
  private originalProducts: Product[] = [];
  private productDbUrl = "https://angular-06-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  constructor(private _toastService: ToastService, 
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>(this.productDbUrl).subscribe(productsFromDb => {
      this.products = productsFromDb;
      this.originalProducts = productsFromDb;
      this.categories = this.products.map(element => element.category);
      this.categories = [... new Set(this.categories)];
      //this.categories = [... new Set(this.products.map(element => element.category))];
    });
  }

  selectCategory(category: string) {
    if (category === 'all') {
      this.products = this.originalProducts;
      this.selectedCategory = "all";
    } else {
      this.products = this.originalProducts.filter(element => element.category === category);
      this.selectedCategory = category;
    }
  }

  addToCart(productClicked: Product) {
    // console.log(product);
    let cart: CartProduct[] = [];
    const cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
      cart = JSON.parse(cartSS);
    }
    // 1. kontrollin kas see toode on ostukorvis juba olemas --- find undefined:{id:"1",name:"s"} / findIndex  -1 : 23
    // 2. kui on ostukorvis olemas, suurendan kogust
    // 3. kui EI OLE ostukorvis olemas, pushin
    // 4. .push({id:"1",name:"s"})       .push({product:{id:"1",name:"s"}, quantity: 1})     
    const index = cart.findIndex(element => element.product.id === productClicked.id);
    if (index >= 0) {
      // suurendan kogust
      cart[index].quantity = cart[index].quantity + 1;
    } else {
      // lisan juurde
      cart.push({product: productClicked, quantity: 1})
    }
    //cart.push(productClicked); // [{1},{1}] --> [{product: {1}, quantity: 1}]
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
// Ostukorv - kogustega
// Ostukorvi kujundus
// Pipes

// Kategooriate valimine Dropdown menüüst kui lisan või muudan

// Kategooriad ka andmebaasi - võimaldame kategooriaid lisada, vaadata, kustutada
// Kaardirakenduse - võimaldaks vaadata meie poode Eesti kaardil (nagu G Maps - Leaflet)
// Omniva pakiautomaadid kasutusele
// E-maili saatmine - tagasiside / tellimus on tehtud
// Number Navbari

// Nortali proovitöö e-mailile

// Iseseisev projekt 

// ??????
// Piltide üleslaadimist Firebase
// Karusell-galerii kasutuselevõtt