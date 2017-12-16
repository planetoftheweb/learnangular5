import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  query: string;
  artists: object;

  showArtist(item) {
    this.query = item.name;
    item.highlight = !item.highlight;
  }

  constructor( private http: HttpClient ) {
    this.query = '';
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe( data => {
      this.artists = data;
    })
  }

}
