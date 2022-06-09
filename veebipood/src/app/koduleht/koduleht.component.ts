import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-koduleht',
  templateUrl: './koduleht.component.html',
  styleUrls: ['./koduleht.component.css']
})
export class KodulehtComponent implements OnInit {
  viimatiLisatudToode = localStorage.getItem("toode");
  tooted: any[] = [];

  constructor() { }

  ngOnInit(): void {
    let lsTooted = localStorage.getItem("tooted");
    if (lsTooted !== null) {
      this.tooted = JSON.parse(lsTooted);
    }
  }

}
