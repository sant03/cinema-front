import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, startWith, Subject } from 'rxjs';
import { Category, Movie } from 'src/app/MODELS/cinema.model';
import { MovieService } from 'src/app/SERVICES/cinema.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  films: Array<Movie> = [];
  categories: Array<Category> = [
    {
      id: 1,
      name: 'Action',
      description: '',
    },
    {
      id: 2,
      name: 'Fantasy',
      description: '',
    },
    {
      id: 3,
      name: 'Drama',
      description: '',
    },
  ]
  categorySelected: Category | undefined = new Category();
  search : string = ''
  subject = new BehaviorSubject<string>('');

  constructor(private service: MovieService, private router: Router){
    this.service.getMovies(this);
    this.service.getCategories(this);
    this.searchMovie()
  }

  selectCategory(category?: Category){
    if(category){
      this.categorySelected = category;  
      this.service.getMoviesByCategory(category.id, this)        
    }else{
      this.categorySelected = undefined;  
      this.service.getMovies(this);
    }
  }

  searchMovie(){
    // this.subject.subscribe({
    //   next: (value) => {
    //     if(value != null){
    //       this.service.getMovieByTitle(value, this)
    //     }
    //   }
    // })
    this.subject.pipe(
      startWith(''),
      debounceTime(500),
    ).subscribe({
      next: (value) => {
        if(value != null){
          this.service.getMovieByTitle(value, this)
        }
      }
    })
  }

  seeMovie(id: number){
    this.router.navigate(['/movie'], {queryParams:{id:id}})
  }

  successHandlerGetMovies(data: any){
    this.films = data;
  }

  successHandlerGet(data: any){
    this.categories = data;
  }
  errorHandlerGet(){}
  successHandlerPost(){}
  errorHandlerPost(){}
  successHandlerPut(){}
  errorHandlerPut(){}
  successHandlerDelete(){}
  errorHandlerDelete(){}


}
