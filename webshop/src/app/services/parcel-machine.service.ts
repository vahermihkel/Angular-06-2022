import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParcelMachineService {

  constructor(private http: HttpClient) { }

  getParcelMachines() {
    return this.http.get<any[]>("https://www.omniva.ee/locations.json");
  }
}
