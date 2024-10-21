import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MovieService } from 'src/app/SERVICES/cinema.service';
import { Report } from '../../../../MODELS/cinema.model'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

  id: number = this.data.reservationId;
  reasons: string = ''
  doReport: boolean = this.data.doReport;
  reports: Report[] = []
  constructor(public dialogRef: MatDialogRef<ReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: MovieService) {
      if(!this.doReport){
        this.service.getReservationReports(this.id, this)
      }
  }

  reportReservation(){
    this.service.reportReservation(this.id, this.reasons, this.data._this)
  }

  successHandlerGet(data: any){
    this.reports = data;
  }
}
