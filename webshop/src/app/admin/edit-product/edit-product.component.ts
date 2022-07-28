import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  private products: Product[] = [];
  product!: Product;
  private productDbUrl = "https://angular-06-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  editProductForm!: FormGroup; // loodud typescript poolel
  infoOpen = false;
  categories: {id: number, name: string}[] = [];

  constructor(private route: ActivatedRoute, 
    private http: HttpClient,
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategoriesFromDb().subscribe(categoriesFromDb => {
      if (categoriesFromDb) {
        this.categories = categoriesFromDb;
      }
    });
    // const productId = window.location.href.split("muuda-toode/")[1]
    //                        /muuda/:id
    const productId = this.route.snapshot.paramMap.get("id");
    this.http.get<Product[]>(this.productDbUrl).subscribe(productsFromDb => {
      this.products = productsFromDb;
      const productFound = this.products.find(element => Number(element.id) === Number(productId));
      if (productFound !== undefined) {
        this.product = productFound;
        this.editProductForm = new FormGroup({
          id: new FormControl(this.product.id, Validators.required),
          name: new FormControl(this.product.name, Validators.required),
          category: new FormControl(this.product.category, Validators.required),
          imgSrc: new FormControl(this.product.imgSrc, [Validators.required, Validators.pattern(/^\S*$/)]),
          description: new FormControl(this.product.description, Validators.required),
          price: new FormControl(this.product.price, [Validators.required, Validators.pattern(/(?<=^| )\d+(\.\d+)?(?=$| )/)]),
          isActive: new FormControl(this.product.isActive)
        })
      }
      
      });
  }

  openInfo () {
    this.infoOpen = !this.infoOpen;
  }

  onSubmit() {
    // otsin üles järjekorranumbri
    const index = this.products.indexOf(this.product);
   
    // asendan products muutujast
    // [][] = {};
    this.products[index] = this.editProductForm.value;

    // asendan ära kõik tooted andmebaasis PUT abil
    this.http.put(this.productDbUrl, this.products).subscribe(() => {
      // suunamine /admin/halda-tooteid (HTMLs routerLink="/admin/halda-tooteid")
      this.router.navigateByUrl("/admin/halda-tooteid");
    });

    
  }
}
