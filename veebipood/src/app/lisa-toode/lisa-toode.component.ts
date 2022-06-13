import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {
  uusToode = "";

  constructor() { }

  ngOnInit(): void {
  }

  sisestaToode() {
    localStorage.setItem("toode", this.uusToode);

    let lsTooted = localStorage.getItem("tooted");
    let tooted = [];
    if (lsTooted !== null) {
      tooted = JSON.parse(lsTooted);
    }
    // selle lõigu lõpuks on tooted muutuja sees KAS:
    // [] ---> kui ei ole midagi localStorage-s
    // või
    // ["Coca cola", "Fanta", "Sprite"]  ---> võetakse localStorage-st

    tooted.push(this.uusToode);
    localStorage.setItem("tooted", JSON.stringify(tooted)); // pannakse localStorage-sse
  }

  // 1. pean võtma localStorage-st tooted ---> localStorage.getItem
  // 2. pean tegema uue tühja massiivi ---> let muutuja on ( = ) tühi massiiv ( [] )
  // 3. KUI TOOTED ON OLEMAS, siis asendan selle tühja massiivi nende toodetega   ( if  )
  // 4. pean võtma jutumärgid ära  ---> JSON.parse()
  // 5. pean lisama uue toote juurde
  // 6. pean panema jutumärgid tagasi
  // 7. lisan localStorage-sse

}
