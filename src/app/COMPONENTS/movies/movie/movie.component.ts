import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, ShowTime } from 'src/app/MODELS/cinema.model';
import { MovieService } from 'src/app/SERVICES/cinema.service';
import { Utils } from 'src/app/UTILS/utils';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  id: number = 0
  movie: Movie = new Movie();
  showTimes: Array<ShowTime> = new Array<ShowTime>();
  utils = new Utils()

  constructor(private service: MovieService, private route: ActivatedRoute, private router: Router){
    this.route.queryParams.subscribe(param => {
      if(param){
        this.id = param['id'];
        this.getMovie()
        this.getShowTimes()
      }
    })
  }
  
  getMovie(){
    this.service.getMovie(this.id, this)
  }

  processFuntion(id: number){
    this.router.navigate(['/showRoom'], {queryParams:{id:id}})
  }

  getShowTimes(){
    this.service.getShowTime(this.id, this)
  }

  successHandlerGetMovie(data: any){
    this.movie = data;
  }

  successHandlerGetShowTime(data:any){
    this.showTimes = data
  }

  errorHandlerGet(){}
  successHandlerPost(){}
  errorHandlerPost(){}
  successHandlerPut(){}
  errorHandlerPut(){}
  successHandlerDelete(){}
  errorHandlerDelete(){}

}
