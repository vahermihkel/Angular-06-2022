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
    let tooteNimi = window.location.href.split("toode/")[1];
    let lsTooted = localStorage.getItem("tooted");
    let tooted = [];
    if (lsTooted !== null) {
      tooted = JSON.parse(lsTooted);
    }
    this.leitudToode = tooted.find((element:any) => element.nimi.toLowerCase().replaceAll(" ", "-") === tooteNimi);
  }

}
