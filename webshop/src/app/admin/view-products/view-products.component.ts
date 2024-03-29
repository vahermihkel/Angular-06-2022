import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  descriptionLength = 10;
  products: Product[] = [];
  private originalProducts: Product[] = [];
  private productDbUrl = "https://angular-06-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  searchedProduct!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>(this.productDbUrl).subscribe(productsFromDb => {
      this.products = productsFromDb;
      this.originalProducts = productsFromDb;
    });
  }

  searchProducts() {
    console.log("töötab");
    console.log(this.searchedProduct);
    // filterdan kõik tooted keda mul vaja läheb
    // .filter(element => true)   [{1},{2},...,{240}] -> [{1},{2}]
    // t-särk meeste
    // särk naiste
    // vahva pluus
    // [sä]
    //                            2    0   -1 
    // .filter(element => element.name.indexOf("sä")  >= 0 )
    this.products = this.originalProducts.filter(element => 
        element.name.toLowerCase().indexOf(this.searchedProduct.toLowerCase()) >= 0 ||
        element.id.toString().indexOf(this.searchedProduct.toLowerCase()) >= 0 ||
        element.description.toLowerCase().indexOf(this.searchedProduct.toLowerCase()) >= 0
    );
  }

  deleteProduct(product: Product) {
    // otsin üles järjekorranumbri
    const index = this.products.indexOf(product);
    console.log(index);

    console.log(this.products);
    // kustutan products muutujast
    this.products.splice(index,1);
    console.log(this.products);

    // asendan ära kõik tooted andmebaasis PUT abil
    this.http.put(this.productDbUrl, this.products).subscribe();
  }

}
