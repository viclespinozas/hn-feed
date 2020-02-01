import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  @Input() news: [];
  @Input() index: number;
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {

  }

}
