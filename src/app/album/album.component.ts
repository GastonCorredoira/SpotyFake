import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../favourites.service';
import { DataService } from '../data.service';
import { Album } from './Album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})

export class AlbumComponent implements OnInit {
  
  url = this.router.url;

  albums: Album[] = [];

  constructor(private favourites: FavouritesService, private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.url == '/home') {
      this.getRandom();
    }
    else {
      this.getAll();
    }
  }

  addFavourite(album: Album): void {
    this.favourites.addFavoriteAlbum(album);
  }

  getAll() {
    this.dataService.getAllAlbums().subscribe(albums => this.albums = albums);
  }

  getRandom() {
    this.dataService.getRandomAlbums().subscribe(albums => this.albums = albums);
  }

  notOnFavourite(album: Album) {
    return this.favourites.notOnFavouriteAlbum(album);
  }

  alreadyOnFavourite(album: Album) {
    return !this.favourites.notOnFavouriteAlbum(album);
  }
}
