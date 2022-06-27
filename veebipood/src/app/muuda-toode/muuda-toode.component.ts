import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {
  // NAGU YKSIK-TOOTE LEHEL
  // 4. muutuja kuhu panen leitud toote
  leitudToode: any;
  vorm: any;
  private j2rjekorraNumber = -1;
  // HTML-s või kahes/enamas funktsioonis

  constructor(private router: Router) { }

  ngOnInit(): void {
    // 5. võtan URL-st toote nime
    // võtan localStorage-st kõik tooted ja
    // .find() abil otsin õige toote üles
    let tooteNimi = window.location.href.split("muuda/")[1]; 
    let tooted = [];
    let lsTooted = localStorage.getItem("tooted");
    if (lsTooted !== null) {
      tooted = JSON.parse(lsTooted);
    }
    this.leitudToode = tooted.find((element:any) => 
      element.nimi.toLowerCase().replaceAll(" ", "-") === tooteNimi);
    this.j2rjekorraNumber = tooted.indexOf(this.leitudToode);
    console.log(this.j2rjekorraNumber);
    this.vorm = new FormGroup({
      nimi: new FormControl(this.leitudToode.nimi),
      hind: new FormControl(this.leitudToode.hind)
    });
  }

  muuda() {
    console.log("töötab");

    // 1. võtan localStoragest
    let lsTooted = localStorage.getItem("tooted");
    let tooted = [];
    if (lsTooted !== null) {
      tooted = JSON.parse(lsTooted);
    }
    // 2. teen midagi --- 
    //  lisamiseks tooted.push(uus_väärtus), 
    //  kustutamiseks tooted.splice(index, mitu_tk)
    //  muutmiseks tooted[index] = uus_väärtus
    tooted[this.j2rjekorraNumber] = this.vorm.value;

    // 3. panen tagasi localStorage-sse
    localStorage.setItem("tooted", JSON.stringify(tooted));

    // 4. suunan
    this.router.navigateByUrl("/halda-tooteid");
  }

}
