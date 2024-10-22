import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Seat, ShowRoom } from 'src/app/MODELS/cinema.model';
import { MovieService } from 'src/app/SERVICES/cinema.service';

@Component({
  selector: 'app-form-show-room',
  templateUrl: './form-show-room.component.html',
  styleUrls: ['./form-show-room.component.scss']
})
export class FormShowRoomComponent {

  showRooms: Array<ShowRoom> = []
  showRoomSelected: ShowRoom | undefined = new ShowRoom();
  aforo: number = 0;
  rows: any[] = [];

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]), 
    description: new FormControl('', [Validators.required])
  });       
  
  constructor(private service: MovieService){
    this.showRoomSelected = this.showRooms[0]
    this.service.getShowRooms(this)
  }

  selectShowRoom(showRoom?: ShowRoom){
    if(showRoom){
      this.showRoomSelected = showRoom;  
      this.processSeats([], showRoom.seats)
    }
  }

  successHandlerGet(data: any){
    this.showRooms = data
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
    this.rows = seatsProcessed
    return this.rows
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
      {name : 'K', greatherThan: 66, lessThan: 77},
      {name : 'L', greatherThan: 76, lessThan: 87},
      {name : 'M', greatherThan: 86, lessThan: 98}

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
          isReported: false,
          isAvailable: true,
        }
        seatsCompleted.push(newSeat)
      }
    }
    return seatsCompleted

  }

  setSeat(seat: any){
    let row = this.rows.find((row: any) => {return row.name == seat.name.charAt(0)}) 
    if(row){
      let otherSeat = [...row.rowSeats].find((element: any) => element.id == seat.id)
      otherSeat.isAvailable = !otherSeat.isAvailable
    } 
  }

}
