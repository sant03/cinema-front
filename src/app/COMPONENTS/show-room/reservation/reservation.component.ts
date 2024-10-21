import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Reservation } from 'src/app/MODELS/cinema.model';
import { MovieService } from 'src/app/SERVICES/cinema.service';
import { Utils } from 'src/app/UTILS/utils';
import { MessagesComponent } from '../../messages/messages.component';
import { ReportComponent } from './report/report.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {

  reservation : any = this.data;
  utils = new Utils()

  constructor(public dialogRef: MatDialogRef<ReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: MovieService, private dialog: MatDialog) {
    }

  doReservation(){
    let reservation = new Reservation()
    reservation.userId = this.reservation.userId
    reservation.seatId = this.reservation.seat.id
    reservation.showTimeId = this.reservation.showTime.id
    reservation.isCanceled = false
    reservation.isReported = false

    this.service.doReservation(reservation, this.reservation._this)
  }

  cancelReservation(){
    this.dialog.closeAll()
    let dataDialog = {
      title : 'Cancel Reservation',
      content: '¿Are you sure you want to cancel this reservation?',
      confirm: true
    }
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '30%',
      height: '30%',
      data: dataDialog
    });

    dialogRef.afterClosed().subscribe((confirm) => {
      if(confirm){
        console.log("RESERVATION: " + this.reservation.id)
        this.service.cancelReservation(this.reservation.id, this.reservation._this)
      }
    })
  }

  reportReservation(){
    this.dialog.closeAll()

    let dataDialog = {
      reservationId: this.reservation.id,
      _this: this.reservation._this,
      doReport: true
    }
    const dialogRef = this.dialog.open(ReportComponent, {
      width: '30%',
      height: '50%',
      data: dataDialog
    });
  }

}
