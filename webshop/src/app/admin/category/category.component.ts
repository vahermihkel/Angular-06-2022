import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: {id: number, name: string}[] = [];
  private categoryDbUrl = "https://angular-06-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  constructor(private http: HttpClient) { }

    ngOnInit(): void {
      this.http.get<{id: number, name: string}[]>(this.categoryDbUrl).subscribe(categoriesFromDb => {
        if (categoriesFromDb) {
          this.categories = categoriesFromDb;
        }
      })
    }

    onSubmit(form: NgForm) {
      this.categories.push(form.value);
      this.http.put(this.categoryDbUrl, this.categories).subscribe();
    }

    // kustutamine - KODUS
}
