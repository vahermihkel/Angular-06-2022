import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yksik-toode',
  templateUrl: './yksik-toode.component.html',
  styleUrls: ['./yksik-toode.component.css']
})
export class YksikToodeComponent implements OnInit {
  leitudToode: any;  // {nimi: "COca cola", hind: 3123}

  // : tähistab tüüpi
  // = tähistab väärtust
  // :any tähistab et seal sees on objekt, aga tal pole veel väärtust

  constructor() { }

  ngOnInit(): void {
    //     0         1
    // ['adasds','eqwewq']
    // localhost:4200/toode/fanta-purk
    //       0                  1
    // ['localhost:4200/', 'fanta-purk']
    // tooteNimi = "fanta-purk";
    let tooteNimi = window.location.href.split("toode/")[1]; 
    let tooted = [];
    let lsTooted = localStorage.getItem("tooted");
    if (lsTooted !== null) {
      tooted = JSON.parse(lsTooted);
    }
    // [{nimi: "Coca cola", hind: 5}, {nimi: "Fanta purk", hind: 3}, {nimi: "Fanta purk", hind: 10}].find(e =>)
    // {nimi: "Coca cola", hind: 5} => "coca-cola" === "fanta-purk"      false
    // {nimi: "Fanta purk", hind: 3} => "fanta-purk" === "fanta-purk"      true
    this.leitudToode = tooted.find((element:any) => 
      element.nimi.toLowerCase().replaceAll(" ", "-") === tooteNimi);
    // this.leitudToode = {nimi: "Fanta purk", hind: 3};
  }

}
