import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryDbUrl = "https://angular-06-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  constructor(private http: HttpClient) { }

  getCategoriesFromDb() {
    return this.http.get<{id: number, name: string}[]>(this.categoryDbUrl);
  }

  saveCategoriesToDb(newCategories: any[]) {
    return this.http.put(this.categoryDbUrl, newCategories);
  }
}
