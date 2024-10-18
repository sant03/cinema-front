import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/MODELS/cinema.model';
import { MovieService } from 'src/app/SERVICES/cinema.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  films: Array<Movie> = [];

  constructor(private service: MovieService, private router: Router){
    this.service.getMovies(this);
  }


  seeMovie(id: number){
    this.router.navigate(['/movie'], {queryParams:{id:id}})
  }

  successHandlerGet(data: any){
    this.films = data;
  }
  errorHandlerGet(){}
  successHandlerPost(){}
  errorHandlerPost(){}
  successHandlerPut(){}
  errorHandlerPut(){}
  successHandlerDelete(){}
  errorHandlerDelete(){}


}
