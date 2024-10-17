import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './COMPONENTS/movies/movies.component';
import { MovieComponent } from './COMPONENTS/movies/movie/movie.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movie', component: MovieComponent},
  {path: '', component: MoviesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
