import { NumberFormatStyle } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from './album/Album';
import { Song } from './song/Song';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor() { }

  private _favouriteAlbums: Album[] = [];
  favouriteAlbums: BehaviorSubject<Album[]> = new BehaviorSubject(this._favouriteAlbums);
  
  private _favouriteSongs: Song[] = [];
  favouriteSongs: BehaviorSubject<Song[]> = new BehaviorSubject(this._favouriteSongs);
  
  addFavoriteAlbum(album: Album) {
    let item = this._favouriteAlbums.find((v1) => (v1.albumname == album.albumname));
    if (!item) {
    this._favouriteAlbums.push({... album});
    this.favouriteAlbums.next(this._favouriteAlbums);
    }
  }

  addFavouriteSong(song: Song) {
    let item = this._favouriteSongs.find((v1) => (v1.name == song.name));
    if (!item) {
      this._favouriteSongs.push({... song});
      this.favouriteSongs.next(this._favouriteSongs);
    }
  }

  albumLength() {
    return this._favouriteAlbums.length;
  }

  songLength() {
    return this._favouriteSongs.length;
  }

  notOnFavouriteAlbum(album: Album) {
    let item = this._favouriteAlbums.find((v1) => (v1.albumname == album.albumname));
    if (!item) {
      return true;
    }
    else {
      return false;
    }
  }

  notOnFavouriteSong(song: Song) {
    let item = this._favouriteSongs.find((v1) => (v1.name == song.name));
    if (!item) {
      return true;
    }
    else {
      return false;
    }
  }
}