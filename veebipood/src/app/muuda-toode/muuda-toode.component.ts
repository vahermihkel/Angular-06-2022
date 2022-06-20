import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {
  // NAGU YKSIK-TOOTE LEHEL
  // 4. muutuja kuhu panen leitud toote

  constructor() { }

  ngOnInit(): void {
    // 5. võtan URL-st toote nime
    // võtan localStorage-st kõik tooted ja
    // .find() abil otsin õige toote üles
  }

}
