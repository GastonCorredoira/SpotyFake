import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from './song/Song';

@Injectable({
  providedIn: 'root'
})

export class RatesService {

  constructor() { }

  private _rateList: Song[] = [];
  rateList: BehaviorSubject<Song[]> = new BehaviorSubject(this._rateList);

  rateSong(song: Song) {
    let item = this._rateList.find((v1) => (v1.name == song.name));
    if(song.rate > 0) {
      if (item) {
        item.rate = song.rate;
      }
      else {
        this._rateList.push({... song});
      }
    }    
  }

  ratedSongsQuantity() {
    return this._rateList.length;
  }
}
