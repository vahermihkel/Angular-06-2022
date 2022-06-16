import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  ostukorviTooted: any[] = [];
  kogusumma = 0;

  constructor() { }

  ngOnInit(): void {
    let lsOstukorv = localStorage.getItem("ostukorv");
    if (lsOstukorv !== null) {
      this.ostukorviTooted = JSON.parse(lsOstukorv);
    }
    this.arvutaKogusumma();
  }

  lisaOstukorvi(toode: string) {
    this.ostukorviTooted.push(toode);
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorviTooted));
    this.arvutaKogusumma();
  }

  eemaldaOstukorvist(toode: string) {
    let index = this.ostukorviTooted.indexOf(toode); // järjekorranumbri leidmiseks
    this.ostukorviTooted.splice(index, 1);
    // toote listi sisese indexi
    // järjekorranumbri alusel kustutama ja pean ütlema täpselt 1tk
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorviTooted));
    this.arvutaKogusumma();
  }
  
  tyhjenda() {
    this.ostukorviTooted = [];
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorviTooted));
    this.arvutaKogusumma();
  }

  arvutaKogusumma() {
    this.kogusumma = 0;
    // this.ostukorviTooted = [{n: "cc", h: 3}, {n: "fa", h: 2}, {n: "fa", h: 2}]
    // .forEach({n: "cc", h: 3}  =>  3  =  0 + 3  )
    // .forEach({n: "fa", h: 2}  =>  5  =  3 + 2  )
    // .forEach({n: "fa", h: 2}  =>  7  =  5 + 2 )

    // <div *ngFor="let element of ostukorviTooted">{{element.hind}}<div>
    this.ostukorviTooted.forEach(element => this.kogusumma = this.kogusumma + element.hind);
  }
}
