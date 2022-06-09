import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veebipood';
  programmiKeel = localStorage.getItem("keel");
  // sõnaline (jutumärkides) --- string
  // numbriline (ilma jutumärkideta numbritest koosnev) --- number
  // kahendväärtus (true või false) --- boolean

  valiKeel(uusKeel: string) {
    localStorage.setItem("keel", uusKeel);
    this.programmiKeel = uusKeel;
  }
}

// 1. andmebaas - väline, internetist
// 2. brauserisse - cookies, localStorage
// 3. faili - excel, txt


// valiKeelEN() {
//   this.programmiKeel = "EN";
// }

// valiKeelRU() {
//   this.programmiKeel = "RU";
// }

// valiKeelEE() {
//   this.programmiKeel = "EE";
// }
