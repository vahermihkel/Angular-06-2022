import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-koduleht',
  templateUrl: './koduleht.component.html',
  styleUrls: ['./koduleht.component.css']
})
export class KodulehtComponent implements OnInit {
  //                    = "fanta"
  //viimatiLisatudToode = localStorage.getItem("toode"); // HTML-s kuvamiseks
  //            = [{nimi: "Fanta", hind: 32}]
  tooted: any[] = []; // HTML-s kuvamiseks

  constructor() { }

  ngOnInit(): void { // kui lehele tullakse
    let lsTooted = localStorage.getItem("tooted");
    if (lsTooted !== null) {
      this.tooted = JSON.parse(lsTooted);
    }
  }

              // {nimi: "cc", hind: 5}
  lisaOstukorvi(toode: any) {
    let ostukorv = []; // ma ei kuva HTML-s välja, seega let on ees
    // ls lsOstukorv = null
    // ls lsOstukorv = "[{nimi: "da", hind: 3}]"
    let lsOstukorv = localStorage.getItem("ostukorv");
    // kui on tühjus, siis siia blokki ei lähe
    // kui ei ole tühjus (localStorage-s on midagi pandud), siis sobib
    if (lsOstukorv !== null) {
    //  ostukorv  =   [{nimi: "da", hind: 3}]
      ostukorv = JSON.parse(lsOstukorv);
    }
    // [].push({nimi: "da", hind: 3}) --> [{nimi: "da", hind: 3}]
    // [{nimi: "da", hind: 3}].push({nimi: "cc", hind: 5}) --> [{nimi: "da", hind: 3},{nimi: "cc", hind: 5}]
    ostukorv.push(toode);
    //   key    |    value
    // ostukorv |   "[{nimi: "da", hind: 3}]"
    // ostukorv |   "[{nimi: "da", hind: 3},{nimi: "cc", hind: 5}]"
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  } 

}