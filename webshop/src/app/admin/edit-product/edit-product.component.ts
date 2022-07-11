import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  private products: any[] = [];
  product: any;
  private productDbUrl = "https://angular-06-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  editProductFrom: any; // loodud typescript poolel
  infoOpen = false;

  constructor(private route: ActivatedRoute, 
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    // const productId = window.location.href.split("muuda-toode/")[1]
    //                        /muuda/:id
    const productId = this.route.snapshot.paramMap.get("id");
    this.http.get<any[]>(this.productDbUrl).subscribe(productsFromDb => {
      this.products = productsFromDb;
      this.product = this.products.find(element => Number(element.id) === Number(productId));
      this.editProductFrom = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name),
        category: new FormControl(this.product.category),
        imgSrc: new FormControl(this.product.imgSrc),
        description: new FormControl(this.product.description),
        price: new FormControl(this.product.price),
        isActive: new FormControl(this.product.isActive)
      })
      });
  }

  openInfo () {
    this.infoOpen = !this.infoOpen;
  }

  onSubmit() {
    // otsin üles järjekorranumbri
    const index = this.products.indexOf(this.product);
   
    // asendan products muutujast
    this.products[index] = this.editProductFrom.value;

    // asendan ära kõik tooted andmebaasis PUT abil
    this.http.put(this.productDbUrl, this.products).subscribe(() => {
      // suunamine /admin/halda-tooteid (HTMLs routerLink="/admin/halda-tooteid")
      this.router.navigateByUrl("/admin/halda-tooteid");
    });

    
  }
}
