import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiClient {

    constructor(private http: HttpClient){}

    get = (url: string, params: any,  _this: any) => {
        this.http.get(url + params).subscribe({
            next: (data: any) => {
                if(data){
                    _this.successHandlerGet(data)
                }
            },
            error: (e) => {},
            complete: () => {}
        })
    }
    post = (url: string, params: any, body: any, _this: any) => {
        this.http.post(url + params, body).subscribe({
            next: () => {},
            error: (e) => {},
            complete: () => {}
        })
    }
    put = (url: string, params: any, body: any, _this: any) => {
        this.http.put(url + params, body).subscribe({
            next : () => {},
            error: (e) => {},
            complete: () => {}
        });
    }
    delete = (url: string, params: any, _this: any) => {
        this.http.delete(url + params).subscribe({
            next : () => {},
            error: (e) => {},
            complete: () => {}
        })
    }

    getMovie = (url: string, params: any,  _this: any) => {
        this.http.get(url + params).subscribe({
            next: (data: any) => {
                if(data){
                    _this.successHandlerGetMovie(data)
                }
            },
            error: (e) => {},
            complete: () => {}
        })
    }

    getShowTime = (url: string, params: any,  _this: any) => {
        this.http.get(url + params).subscribe({
            next: (data: any) => {
                if(data){
                    _this.successHandlerGetShowTime(data)
                }
            },
            error: (e) => {},
            complete: () => {}
        })
    }


}