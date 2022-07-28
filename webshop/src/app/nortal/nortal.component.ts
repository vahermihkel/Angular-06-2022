import { Component, OnInit } from '@angular/core';
import { NortalService } from '../services/nortal.service';

@Component({
  selector: 'app-nortal',
  templateUrl: './nortal.component.html',
  styleUrls: ['./nortal.component.css']
})
export class NortalComponent implements OnInit {

  coopProducts: any[] = [];

  constructor(private nortalService: NortalService) { }

  ngOnInit(): void {
    this.nortalService.getCoopProducts().subscribe(coopProductsFromAPI => {
      // console.log(coopProductsFromAPI.data);
      this.coopProducts = coopProductsFromAPI.data;
    })
  }

}
