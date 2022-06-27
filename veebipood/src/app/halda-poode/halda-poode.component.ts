import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halda-poode',
  templateUrl: './halda-poode.component.html',
  styleUrls: ['./halda-poode.component.css']
})
export class HaldaPoodeComponent implements OnInit {
  keskused: any[] = [];

  constructor() { }

  ngOnInit(): void {
    let keskusedLS = localStorage.getItem("keskused");
    if (keskusedLS !== null) {
      this.keskused = JSON.parse(keskusedLS);
    }
  }

}
