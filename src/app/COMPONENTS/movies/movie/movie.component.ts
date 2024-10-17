import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/SERVICES/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  id: number = 0
  movie: any;
  showTimes: any;

  constructor(private service: MovieService, private route: ActivatedRoute){
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

  getShowTimes(){
    this.service.getShowTime(this.id, this)
  }

  successHandlerGetMovie(data: any){
    this.movie = data;
  }

  successHandlerGetShowTime(data:any){
    this.showTimes = data
  }

  parseDate(date: string){
    if(date != null){
      const normalizedDateStr = date.replace('a. m.', 'AM').replace('p. m.', 'PM');
      const parsedDate = new Date(normalizedDateStr);
      console.log(parsedDate);
      return parsedDate;
    }
    return new Date()

  }

  errorHandlerGet(){}
  successHandlerPost(){}
  errorHandlerPost(){}
  successHandlerPut(){}
  errorHandlerPut(){}
  successHandlerDelete(){}
  errorHandlerDelete(){}

}
