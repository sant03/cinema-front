import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, Movie, ShowTime } from 'src/app/MODELS/cinema.model';
import { MovieService } from 'src/app/SERVICES/cinema.service';
import { Utils } from 'src/app/UTILS/utils';

@Component({
  selector: 'app-form-show-time',
  templateUrl: './form-show-time.component.html',
  styleUrls: ['./form-show-time.component.scss']
})
export class FormShowTimeComponent {
  @Input() categories: Array<Category> = []
  films: Array<Movie> = [];
  categorySelected: Category | undefined = new Category();
  categoryName: string = ''
  filmSelected: Movie | undefined = new Movie();
  showTimeSelected: ShowTime | undefined = new ShowTime();
  showTimes: Array<ShowTime> = new Array<ShowTime>();
  utils = new Utils();
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]), 
    description: new FormControl('', [Validators.required])
  });       
  
  constructor(private service: MovieService){
    this.selectCategory(this.categories[0])
  }

  selectCategory(category?: Category){
    if(category){
      this.categorySelected = category; 
      this.categoryName = category.name
      this.showTimeSelected = new ShowTime()
      this.showTimes = new Array<ShowTime>()
      this.service.getMoviesByCategory(category.id, this)         
    }
  }

  selectFilm(film: Movie){
    this.filmSelected = film
    this.service.getShowTime(film.id, this)
  }

  selectShowTime(showTime: ShowTime){
    this.showTimeSelected = showTime
  }

  successHandlerGetMovies(data: any){
    this.films = data;
  }

  successHandlerGetShowTime(data:any){
    this.showTimes = data
  }

}
