import { NumberFormatStyle } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FavouritesService } from '../favourites.service';
import { DataService } from '../data.service';
import { RatesService } from '../rates.service';
import { Song } from './Song';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})

export class SongComponent implements OnInit {
  static getFromAlbum(id: number) {
    throw new Error('Method not implemented.');
  }

  url = this.router.url;

  constructor(private favourites: FavouritesService, private dataService: DataService, private router: Router, private rate: RatesService) {
  }

  ngOnInit(): void {
    if (this.url == '/home') {
      this.getRandom();
    }
    else if (this.url == '/songs'){
      this.getAll();
    }    
  }

  songs: Song[] = [];

  addFavourite(song: Song): void {
    this.favourites.addFavouriteSong(song);
  }

  getAll() {
    this.dataService.getAllSongs().subscribe(songs => this.songs = songs);
  }
  
  getRandom() {
    this.dataService.getRandomSongs().subscribe(songs => this.songs = songs);
  }

  rateSong(song: Song): void {
    this.rate.rateSong(song);
  }

  notOnFavourite(song: Song) {
    return this.favourites.notOnFavouriteSong(song);
  }

  alreadyOnFavourite(song: Song) {
    return !this.favourites.notOnFavouriteSong(song);
  }
}
