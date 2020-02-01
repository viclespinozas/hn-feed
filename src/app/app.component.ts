import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hacker-news-feed';
  newsList = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('/api/news').subscribe(
      (newsList: []) => {
        this.newsList = newsList;
        console.log(this.newsList);
      }, error => {
          console.log('There was an error on the server', error);
      });
  }
}
