import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halda-tooteid',
  templateUrl: './halda-tooteid.component.html',
  styleUrls: ['./halda-tooteid.component.css']
})
export class HaldaTooteidComponent implements OnInit {
  // NAGU KODULEHEL
  // 1. tee siin uus muutuja
  tooted: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // 2. võta localStorage-st .getItem("tooted")
    let lsTooted = localStorage.getItem("tooted");
    if (lsTooted !== null) {
      this.tooted = JSON.parse(lsTooted);
    }
  }

  kustuta(toode: any) {
    const j2rjekorraNumber = this.tooted.indexOf(toode);
    // console.log(j2rjekorraNumber);
    
    // 2. tee midagi
    this.tooted.splice(j2rjekorraNumber,1);

    // 3. pane tagasi localStorage-sse
    localStorage.setItem("tooted", JSON.stringify(this.tooted));
  }

}

// localStorage.getItem("võti")
// -------
// localStorage.setItem("võti", [{1},{2}])
