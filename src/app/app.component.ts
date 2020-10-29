import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-jsonp-test';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?client=gme-foobar',
        'callback'
      )
      .subscribe(() => {
        this.title = 'map enabled';
      });
  }
}
