import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  private products: any[] = [];
  product: any;
  private productDbUrl = "https://angular-06-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  constructor(private route: ActivatedRoute, 
    private http: HttpClient) { }

  ngOnInit(): void {
    // const productId = window.location.href.split("muuda-toode/")[1]
    //                        /toode/:id
    const productId = this.route.snapshot.paramMap.get("id");
    this.http.get<any[]>(this.productDbUrl).subscribe(productsFromDb => {
      this.products = productsFromDb;
      this.product = this.products.find(element => Number(element.id) === Number(productId));
      });
  }
}
