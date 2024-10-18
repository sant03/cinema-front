import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Reservation } from 'src/app/MODELS/cinema.model';
import { MovieService } from 'src/app/SERVICES/cinema.service';
import { Utils } from 'src/app/UTILS/utils';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {

  reservation : any = this.data;
  utils = new Utils()

  constructor(public dialogRef: MatDialogRef<ReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: MovieService) {

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

}
