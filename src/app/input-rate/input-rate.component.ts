import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from '../song/Song';
import { SongComponent } from '../song/song.component';

@Component({
  selector: 'app-input-rate',
  templateUrl: './input-rate.component.html',
  styleUrls: ['./input-rate.component.scss']
})
export class InputRateComponent implements OnInit {

  constructor(){
  }
  ngOnInit(): void {
    this.rate = 0;
  }

  @Input()
  rate!: number;

  @Output()
  rateChange: EventEmitter<number> = new EventEmitter<number>();

  upRate(): void{
    if (this.rate < 5) {
      this.rate++;
      this.rateChange.emit(this.rate);
    }
  }

  downRate(): void{
    if (this.rate > 0) {
      this.rate--;
      this.rateChange.emit(this.rate);
    }
  }

  changeRate(event: { key: any; }): void{
    console.log(event.key);
    this.rateChange.emit(this.rate);
  }
}
