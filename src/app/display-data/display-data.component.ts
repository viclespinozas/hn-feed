import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  news: [];

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient.get('/api/v1/news').subscribe(
      (news: []) => {
        this.news = news;
      }
    );
  }

  ngOnInit() {
  }

}
