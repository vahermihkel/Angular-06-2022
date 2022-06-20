import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halda-tooteid',
  templateUrl: './halda-tooteid.component.html',
  styleUrls: ['./halda-tooteid.component.css']
})
export class HaldaTooteidComponent implements OnInit {
  // NAGU KODULEHEL
  // 1. tee siin uus muutuja

  constructor() { }

  ngOnInit(): void {
    // 2. võta localStorage-st .getItem("tooted")
  }

}
