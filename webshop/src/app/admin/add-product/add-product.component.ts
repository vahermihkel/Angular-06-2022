import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private products: Product[] = [];
  private productDbUrl = "https://angular-06-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  buttonDisabled = true;
  message = "";
  categories: {id: number, name: string}[] = [];
  private categoryDbUrl = "https://angular-06-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  constructor(private http: HttpClient, 
    private router: Router) { }

  ngOnInit(): void {
    this.http.get<Product[]>(this.productDbUrl).subscribe(productsFromDb => {
      if (productsFromDb) {
        this.products = productsFromDb;
      }
    })
    this.http.get<{id: number, name: string}[]>(this.categoryDbUrl).subscribe(categoriesFromDb => {
      if (categoriesFromDb) {
        this.categories = categoriesFromDb;
      }
    })
  }

  checkIdUniqueness(id: number) {
    // console.log(id);
    // otsime järjekorranumbri sellele ID-le toodete hulgast
    // KUI ON, siis on 0,1,2,3,4,5,99999...999   KUI EI OLE -1
    if (id > 10000000 && id < 99999999) {
      const index = this.products.findIndex(element => element.id === id);
      console.log(index);
      if (index >= 0) { // index !== -1,   index === -1
        console.log("mitteunikaalne");
        this.buttonDisabled = true;
        this.message = "Sisestatud ID ei ole unikaalne";
      } else {
        console.log("unikaalne");
        this.buttonDisabled = false;
        this.message = "";
      }
    } else {
      this.buttonDisabled = true;
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    // asendan products muutujast
    //this.products[index] = this.editProductFrom.value;
    // .push()
    this.products.push(form.value);

    // asendan ära kõik tooted andmebaasis PUT abil
    this.http.put(this.productDbUrl, this.products).subscribe(() => {
      // suunamine /admin/halda-tooteid (HTMLs routerLink="/admin/halda-tooteid")
      this.router.navigateByUrl("/admin/halda-tooteid");
    });
  }
}
