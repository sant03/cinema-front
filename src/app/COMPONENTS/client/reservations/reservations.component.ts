import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Utils } from 'src/app/UTILS/utils';
import { ReservationComponent } from '../../show-room/reservation/reservation.component';
import { ReportComponent } from '../../show-room/reservation/report/report.component';
import { MovieService } from 'src/app/SERVICES/cinema.service';
import { MessagesComponent } from '../../messages/messages.component';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {

  id: number = 0;
  @Input() reservations: Array<any> = new Array<any>();
  utlis = new Utils()

  constructor(private dialog: MatDialog, private service: MovieService){
    this.getUserReservations()
  }

  getUserReservations(){
    this.service.getUserReservations(1, this)
  }

  seeReservation(reservation: any){
    reservation.seat.isReserved = true
    reservation.seat.isReported = reservation.reported
    let reservationInfo = {
      id: reservation.id,
      userId: 1,
      seat: reservation.seat,
      showRoom: reservation.showTime.showRoom,
      showTime: reservation.showTime,
      _this: this,
      reserved: true
    }
    const dialogRef = this.dialog.open(ReservationComponent, {
      width: '40%',
      height: '40%',
      data: reservationInfo,
    });
  }

  seeReports(id: number){
    this.dialog.closeAll()

    let dataDialog = {
      reservationId: id,
      _this: this,
      doReport: false
    }
    const dialogRef = this.dialog.open(ReportComponent, {
      width: '30%',
      height: '50%',
      data: dataDialog
    });
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
      this.getUserReservations()    
    })
  }

  successHandlerDelete(data: any){
    console.log(data)
    let dataDialog = {
      title : 'Reservation canceled',
      content: 'Your reservation has been canceled successfully'
    }
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '30%',
      height: '30%',
      data: dataDialog
    }); 

    dialogRef.afterClosed().subscribe(data =>{
      this.getUserReservations()    
    }) 
  }

}
