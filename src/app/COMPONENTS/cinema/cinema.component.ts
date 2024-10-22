import { Component } from '@angular/core';
import { Category } from 'src/app/MODELS/cinema.model';
import { MovieService } from 'src/app/SERVICES/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent {

  showModule: string = 'category'
  categories: Array<Category> = []

  constructor(private service: MovieService){
    this.service.getCategories(this);
  }

  successHandlerGet(data: any){
    this.categories = data;
  }

  changeView(moduleView:string){
    console.log(moduleView);
    this.showModule = moduleView;
  }

}
