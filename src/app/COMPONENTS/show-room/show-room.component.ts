import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FunctionRoom, Reservation, Seat, ShowRoom, ShowTime } from 'src/app/MODELS/cinema.model';
import { MovieService } from 'src/app/SERVICES/cinema.service';
import { Utils } from 'src/app/UTILS/utils';
import { ReservationComponent } from './reservation/reservation.component';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-show-room',
  templateUrl: './show-room.component.html',
  styleUrls: ['./show-room.component.scss']
})
export class ShowRoomComponent {

  id: number = 0;
  funtionRoom: FunctionRoom = new FunctionRoom();
  reservations: Array<any> = new Array<any>();
  utlis = new Utils()

  constructor(private service: MovieService, private route: ActivatedRoute, private dialog: MatDialog){
    this.route.queryParams.subscribe(params => {
      this.id = params['id']
      this.processFuntionRoom()
      this.getUserReservations()
    })
  }

  processFuntionRoom(){
    this.service.processFuntion(this.id, this)
  }

  getUserReservations(){
    this.service.getUserReservations(1, this)
  }

  processSeats(seats: Seat[], aforo: number){
    let seatsProcessed: any = []
    let seatsCompleted: any = [];
    if(seats.length == aforo){
      seatsCompleted = seats;
    }else{
      seatsCompleted = this.completeSeats(seats, aforo)
    }
    if(seatsCompleted.length > 0){
      seatsCompleted.forEach((seat: any) => {
        let row = seatsProcessed.find((row: any) => {
          return row.name === seat.name.charAt(0)
        });
        if(row){
          if(seat.name.includes(row.name)){
            row.rowSeats.add(seat)
          }
        }else{
          row = {name: seat.name.charAt(0), rowSeats: new Set<Seat>()}
          row.rowSeats.add(seat)
          seatsProcessed.push(row)
        }
      })
    }
    return seatsProcessed
  }

  completeSeats(seats: Seat[], aforo: number){
    let seatsCompleted = Array<Seat>()
    let rowSeats = [
      {name : 'A', greatherThan: 0, lessThan: 4},
      {name : 'B', greatherThan: 3, lessThan: 9},
      {name : 'C', greatherThan: 8, lessThan: 16},
      {name : 'D', greatherThan: 15, lessThan: 23},
      {name : 'E', greatherThan: 22, lessThan: 30},
      {name : 'F', greatherThan: 29, lessThan: 37},
      {name : 'G', greatherThan: 36, lessThan: 44},
      {name : 'H', greatherThan: 43, lessThan: 51},
      {name : 'I', greatherThan: 50, lessThan: 58},
      {name : 'J', greatherThan: 57, lessThan: 67},
      {name : 'K', greatherThan: 66, lessThan: 78}
    ]
    for(let i=1; i <= aforo; i++){
      let reservedSeat =  seats.find((seat: Seat) => seat.id == i)
      if(reservedSeat){
        seatsCompleted.push(reservedSeat)
      }else{
        let seatName= rowSeats.find((row: any) => { if( i > row.greatherThan && i < row.lessThan){return row}})
        let newSeat: any = {
          id: i,
          name: seatName ? seatName.name + (i - seatName.greatherThan) : '',
          isReserved: false,
          isReported: false
        }
        seatsCompleted.push(newSeat)
      }
    }
    return seatsCompleted

  }

  successHandlerProcessFuntion(data: any){
    this.funtionRoom = data
    this.processSeats(this.funtionRoom.seats, this.funtionRoom.showRoom.seats)
  }

  successHandlerGet(data: any){
    this.reservations = data;
  }

  successHandlerPost(data: any){
    console.log(data)
    let dataDialog = {
      title : 'Reservation saved',
      content: 'Your reservation has been saved successfully'
    }
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '30%',
      height: '30%',
      data: dataDialog
    }); 

    dialogRef.afterClosed().subscribe(data =>{
      this.processFuntionRoom()
      this.getUserReservations()    
    })
  }

  errorHandlerPost(error: any){
    console.log(error);
    let dataDialog = {
      title : 'Reservation failed',
      content: error.error
    }
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '30%',
      height: '30%',
      data: dataDialog
    });

    dialogRef.afterClosed().subscribe(data =>{
      this.processFuntionRoom()
      this.getUserReservations()    
    })
  }

  proceessReservations(reservations: any){
    let reservationsProcessed = reservations.filter((reservation: any) => {
      return reservation.showTime.id == this.id
    })
    return reservationsProcessed
  }

  reserveSeat(seat: Seat){
    let reservationInfo = {
      userId: 1,
      seat: seat,
      showRoom: this.funtionRoom.showRoom,
      showTime: this.funtionRoom.showTime,
      _this: this
    }

    const dialogRef = this.dialog.open(ReservationComponent, {
      width: '40%',
      height: '40%',
      data: reservationInfo,
    });
  }

  seeReservation(reservation: any){
    reservation.seat.isReserved = true
    reservation.seat.isReported = reservation.reported
    let reservationInfo = {
      userId: 1,
      seat: reservation.seat,
      showRoom: reservation.showTime.showRoom,
      showTime: reservation.showTime,
      _this: this
    }
    const dialogRef = this.dialog.open(ReservationComponent, {
      width: '40%',
      height: '40%',
      data: reservationInfo,
    });
  }








}
