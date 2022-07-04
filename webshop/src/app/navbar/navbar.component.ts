import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) {
    const langLS = localStorage.getItem("language");
    if (langLS) {
      translate.use(langLS);
    } else {
      translate.use('ee');
    }
  }

  ngOnInit(): void {
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem("language", language);
  }

  // changeLanguageEN() {
  //   this.translate.use('en');
  //   localStorage.setItem("language", 'en');
  // }

  // changeLanguageEE() {
  //   this.translate.use('ee');
  //   localStorage.setItem("language", 'ee');
  // }

  // changeLanguageRU() {
  //   this.translate.use('ru');
  //   localStorage.setItem("language", 'ru');
  // }

}
