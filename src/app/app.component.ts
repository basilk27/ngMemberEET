import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   title = 'ngMemberEET';
   loginFlag: boolean;
   mainManuFlag: boolean;

   constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.loginFlag = true;
    this.mainManuFlag = false;
    this.httpClient.get('/v1/api/home' ).subscribe( data => {});
  }

  onLoginClick(): void {
    this.loginFlag = false;
   }
}
