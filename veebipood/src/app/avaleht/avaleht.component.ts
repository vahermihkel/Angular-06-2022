import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  s6naline = "Jutumärkide sees olev väärtus"; // toote nimi, kirjeldus, pildi URL, kategooria, poe nimi, aadress, lahtiolekuaeg
  postiindeks = "54132";
  numbriline = 56; // toote hind
  kahendV22rtus = false; // kas toode on aktiivne
  // vasakul pool on MUUTUJA
  // paremal pool on VÄÄRTUS
  // keskel on võrdusmärk, väärtus liigub paremalt vasakule

  constructor() { } // failide ühendamiseks

  ngOnInit(): void { // käimamineku funktsioon - kui minnakse selle lehe peale,
    // pannakse selle funktsiooni sisu käima
    console.log("läksin avalehe componenti");
  }

  muudaS6nalineV22rtus() {
    console.log("muudetud sõnalise muutuja väärtust");
    this.s6naline = "Uus väärtus";
  }

  muudaS6nalineV22rtusTagasi() {
    console.log("muudetud sõnalise muutuja väärtust tagasi");
    this.s6naline = "Jutumärkide sees olev väärtus";
  }

  muudaNumbrilineV22rtus() {
    this.numbriline = 6543;
  }

  muudaNumbrilineV22rtusTagasi() { // Funktsiooni alustav loogeline sulg
    this.numbriline = 56;
  } // Funktsiooni kinni mineku loogeline sulg

  aktiivseks() {
    this.kahendV22rtus = true;
  }

  mitteaktiivseks() {
    this.kahendV22rtus = false;
  }

  korrutaNumbrilineKahega() {
    this.numbriline = this.numbriline * 2;
  }

  muudaAktiivset() {
    this.kahendV22rtus = !this.kahendV22rtus;
  }

  uudaAktiivset() {
    this.kahendV22rtus = true;
    this.numbriline = this.numbriline + 13123;
    this.s6naline = "Jutumärkide sees olev väärtus";
  }

  // salvestus:
  // 1. andmebaas
  // 2. brauseri vahemällu
  // 3. fail
} // Klassi kinni mineku loogeline sulg

// kollane - funktsioon
// tumesinine - klassiga seonduv + kahendväärtus
// roheline - number
// oranž - jutumärkides väärtused (muutujale antavad)
// helesinine - muutujad