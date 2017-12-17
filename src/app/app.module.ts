import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArtistItemsComponent } from './artist-items/artist-items.component';
import { SearchArtistsPipe } from './search-artists.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ArtistItemsComponent,
    SearchArtistsPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
