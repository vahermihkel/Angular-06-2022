import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {
  v2ljakuvatavKontakt: any;
  keskused: any[] = [];
  // keskused = [
  //   {nimi:'Kristiine', tel:'+3725555555', aadress:'Tammsaare tee'},
  //   {nimi:'Helsinki', tel:'+35831231', aadress: 'asdsa'},
  //   {nimi:'Sfawrda', tel:'+33412312', aadress: 'dsa'}
  //   ];

  constructor() { }

  ngOnInit(): void {
    let keskusedLS = localStorage.getItem("keskused");
    if (keskusedLS !== null) {
      this.keskused = JSON.parse(keskusedLS);
      console.log("töötab");
    }
  }

  v6taYhendust(keskus: any) {
    this.v2ljakuvatavKontakt = keskus;
  }

}
