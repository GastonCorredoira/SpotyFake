import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { SongComponent } from './song/song.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { RateComponent } from './rate/rate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'songs',
    component: SongComponent
  },
  {
    path: 'albums',
    component: AlbumComponent
  },
  {
    path: 'favourites',
    component: FavouriteComponent
  },
  {
    path: 'rates',
    component: RateComponent
  },
  {
    path: 'albums/:ID',
    component: SongComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
