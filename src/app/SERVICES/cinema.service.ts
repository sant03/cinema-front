import { Injectable } from "@angular/core";
import { ApiClient } from "../API/apiClient.service";
import { Reservation } from "../MODELS/cinema.model";

@Injectable()
export class MovieService {

    BASE_URL = 'http://localhost:8080';

    constructor(private api: ApiClient){}

    // ---------- GET --------------------

    getMovies(_this: any){
        this.api.getMovies(this.BASE_URL + '/movies', '', _this)
    }
    getMovie(id: number, _this: any){
        this.api.getMovie(this.BASE_URL + '/movies/', id, _this)
    }

    processFuntion(id: number, _this: any){
        this.api.processFunction(this.BASE_URL + '/room/processFunction?id=', id, _this)
    }

    getShowTime(id: number ,_this: any){
        this.api.getShowTime(this.BASE_URL + '/room/showTime/', id, _this)
    }

    getReservations(_this: any){
        this.api.get(this.BASE_URL + '/cinema/reservations', '', _this)
    }

    getMoviesByCategory(id: number, _this: any){
        this.api.getMovies(this.BASE_URL + '/movies/categories/', id, _this)
    }

    getMovieByTitle(title: string, _this: any){
        this.api.getMovies(this.BASE_URL + '/movies/title?title=', title, _this)
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

    getShowRooms(_this: any){
        this.api.get(this.BASE_URL + '/cinema/showRooms', '', _this)
    }

    getUnavailableSeats(id: number, _this: any){
        this.api.getSeats(this.BASE_URL + '/room/unavailableSeats/', id, _this)
    }
    // ---------- POST -------------------

    doReservation(reservation: Reservation, _this: any){
        this.api.post(this.BASE_URL + '/client/doReservation', '', reservation, _this)
    }

    reportReservation(id: number, body: String, _this: any){
        this.api.post(this.BASE_URL + '/client/reportReservation/', id, body,  _this)

    }
    // ---------- PUT --------------------

    // ---------- DELETE -----------------
    cancelReservation(id: number, _this: any){
        this.api.delete(this.BASE_URL + '/client/cancelReservation/', id, _this)
    }
}