import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  ostukorviTooted = ['Coca cola','Coca cola','Coca cola','Fanta','Fanta'];

  constructor() { }

  ngOnInit(): void {
    console.log("läksin ostukorvi komponenti");
  }

  lisaOstukorvi(toode: string) {
    this.ostukorviTooted.push(toode);
  }

  eemaldaOstukorvist(toode: string) {
    let index = this.ostukorviTooted.indexOf(toode); // järjekorranumbri leidmiseks
    this.ostukorviTooted.splice(index, 1);
    // toote listi sisese indexi
    // järjekorranumbri alusel kustutama ja pean ütlema täpselt 1tk
  }
  
  tyhjenda() {
    this.ostukorviTooted = [];
  }

}
