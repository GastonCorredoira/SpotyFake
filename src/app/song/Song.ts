import { CurrencyPipe } from "@angular/common";

export interface Song {
    id: number,
    name: string,
    duration: string,
    id_album_fk: number,
    rate: number,
}