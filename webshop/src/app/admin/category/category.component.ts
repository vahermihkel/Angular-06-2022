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
    deleteCategory(category: {id: number, name: string}) {
      // otsin üles järjekorranumbri
      const index = this.categories.indexOf(category);
  
      // kustutan products muutujast
      this.categories.splice(index,1);
  
      // asendan ära kõik tooted andmebaasis PUT abil
      this.http.put(this.categoryDbUrl, this.categories).subscribe();
    }
}

// 1. Udemy projektid / Koolitustel projektid / Youtubes
// 2. Teistest failidest kopeerida
// 3. Googeldamine - how to delete from array Angular
