import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, Movie } from 'src/app/MODELS/cinema.model';
import { MovieService } from 'src/app/SERVICES/cinema.service';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.scss']
})
export class FormMovieComponent {
  @Input() categories: Array<Category> = []
  films: Array<Movie> = [];
  categorySelected: Category | undefined = new Category();
  filmSelected: Movie | undefined = new Movie();

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]), 
    description: new FormControl('', [Validators.required])
  });       
  
  constructor(private service: MovieService){
    this.selectCategory(this.categories[0])
  }

  successHandlerGet(data: any){
    
  }

  selectCategory(category?: Category){
    if(category){
      this.categorySelected = category; 
      this.service.getMoviesByCategory(category.id, this)         
    }
  }

  selectFilm(film: Movie){
    this.filmSelected = film
  }

  successHandlerGetMovies(data: any){
    this.films = data;
  }

}
