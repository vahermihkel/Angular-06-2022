import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NortalService {

  constructor(private http: HttpClient) { }

  getCoopProducts() {
    return this.http.get<any>("https://api.ecoop.ee/supermarket/products?language=et");
  }
}
