import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../album/Album';
import { FavouritesService } from '../favourites.service';
import { Song } from '../song/Song';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {

  favouriteSongs$!: Observable<Song[]>;
  favouriteAlbums$!: Observable<Album[]>;
  
  constructor(private favourites: FavouritesService) {
    this.favouriteSongs$ = favourites.favouriteSongs.asObservable();
    this.favouriteAlbums$ = favourites.favouriteAlbums.asObservable();
  }

  albumLength() {
    return this.favourites.albumLength();
  }

  songLength() {
    return this.favourites.songLength();
  }

  functionOR() {
    return (this.albumLength() + this.songLength());
  }

}
