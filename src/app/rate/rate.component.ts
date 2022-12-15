import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RatesService } from '../rates.service';
import { Song } from '../song/Song';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent {

  rateList$!: Observable<Song[]>;

  constructor(private rates: RatesService) {
    this.rateList$ = rates.rateList.asObservable();
  }

  ratedSongsQuantity() {
    return this.rates.ratedSongsQuantity();
  }
}
