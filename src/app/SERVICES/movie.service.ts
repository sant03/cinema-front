import { Injectable } from "@angular/core";
import { ApiClient } from "../API/apiClient.service";

@Injectable()
export class MovieService {

    BASE_URL = 'http://localhost:8080';

    constructor(private api: ApiClient){}

    // ---------- GET --------------------

    getMovies(_this: any){
        this.api.get(this.BASE_URL + '/movies', '', _this)
    }
    getMovie(id: number, _this: any){
        this.api.getMovie(this.BASE_URL + '/movies/', id, _this)
    }

    processFuntion(_this: any){
        this.api.get(this.BASE_URL + '/room/processFunction?id=', 3, this)
    }

    getShowTime(id: number ,_this: any){
        this.api.getShowTime(this.BASE_URL + '/room/showTime/', id, _this)
    }

    getReservations(_this: any){
        this.api.get(this.BASE_URL + '/cinema/reservations', '', _this)
    }

    getMoviesByCategory(id: number, _this: any){
        this.api.get(this.BASE_URL + '/movies/categories/', id, _this)
    }

    getMovieByTitle(title: string, _this: any){
        this.api.get(this.BASE_URL + '/movies/title?title=', title, _this)
    }

    getCategories(_this: any){
        this.api.get(this.BASE_URL + '/movies/categories', '', _this)
    }

    getUserReservations(id: number, _this: any){
        this.api.get(this.BASE_URL + '/client/reservations/', id, _this)
    }

    getReservationReports(id: number ,_this: any){
        this.api.get(this.BASE_URL + '/client/reservation/getReports?reservationId=', id, _this)
    }

    getUserInfo(id: number, _this: any){
        this.api.get(this.BASE_URL + '/users/', id, _this)
    }

    // ---------- POST -------------------

    // ---------- PUT --------------------

    // ---------- DELETE -----------------

}