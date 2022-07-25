import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare let Email: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(form: NgForm) {
    Email.send({
      Host : "smtp.elasticemail.com", // server
      Username : "vahermihkel@gmail.com",
      Password : "58F09DCCB178C6ED58D88E93266C0F0BEDA5",
      To : 'vahermihkel@gmail.com',
      From : "vahermihkel@gmail.com",
      Subject : "Sulle saabus tagasiside",
      // Body : "Tärnid: " + form.value.stars + 
      // " . Saatja: " + form.value.name + 
      // " . Email: " + form.value.email +
      // " . Sisu: " + form.value.message
      Body : `Tärnid: ${form.value.stars} . 
      Saatja: ${form.value.name} .
      Email: ${form.value.email} . 
      Sisu: ${form.value.message}`
    }).then(
      (message: any) => alert(message)
    );
  }

}
