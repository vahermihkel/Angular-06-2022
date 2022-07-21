import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private products: Product[] = [];
  buttonDisabled = true;
  message = "";
  categories: {id: number, name: string}[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.productService.getProductsFromDb().subscribe(productsFromDb => {
      if (productsFromDb) {
        this.products = productsFromDb;
      }
    })
    this.categoryService.getCategoriesFromDb().subscribe(categoriesFromDb => {
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
    this.productService.saveProductsToDb(this.products).subscribe(() => {
      // suunamine /admin/halda-tooteid (HTMLs routerLink="/admin/halda-tooteid")
      this.router.navigateByUrl("/admin/halda-tooteid");
    });
  }
}
