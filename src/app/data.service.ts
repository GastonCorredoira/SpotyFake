import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Album } from './album/Album';
import { Song } from './song/Song';

const AlbumEndpoint = 'https://638925b0c5356b25a2fb7505.mockapi.io/api/albums';
const AlbumRandomEndpoint = 'https://638925b0c5356b25a2fb7505.mockapi.io/api/albums?page=1&limit=4';
const SongEndpoint = 'https://638925b0c5356b25a2fb7505.mockapi.io/api/songs';
const SongRandomEndpoint = 'https://638925b0c5356b25a2fb7505.mockapi.io/api/songs?page=1&limit=8';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(AlbumEndpoint)
  }

  public getRandomAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(AlbumRandomEndpoint)
  }

  public getFromAlbum(albumId: number): Observable<Song[]> {
    return this.http.get<Song[]>
    ('https://638925b0c5356b25a2fb7505.mockapi.io/api/songs?id_album_fk=' + albumId);
  }

  public getAllSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(SongEndpoint)
  }

  public getRandomSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(SongRandomEndpoint)
  }
}