import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-keskus',
  templateUrl: './lisa-keskus.component.html',
  styleUrls: ['./lisa-keskus.component.css']
})
export class LisaKeskusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lisaKeskus(form: any) {
    // console.log(form.value);
    let keskused = [];
    let keskusedLS = localStorage.getItem("keskused");
    if (keskusedLS !== null) {
      keskused = JSON.parse(keskusedLS);
    }
    keskused.push(form.value);
    localStorage.setItem("keskused", JSON.stringify(keskused));
  }

}
