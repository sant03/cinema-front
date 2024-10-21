import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './COMPONENTS/movies/movies.component';
import { MovieComponent } from './COMPONENTS/movies/movie/movie.component';
import { ShowRoomComponent } from './COMPONENTS/show-room/show-room.component';
import { ReservationsComponent } from './COMPONENTS/client/reservations/reservations.component';
import { CinemaComponent } from './COMPONENTS/cinema/cinema.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movie', component: MovieComponent},
  {path: 'showRoom', component: ShowRoomComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'cinema', component: CinemaComponent},
  {path: '', component: MoviesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
