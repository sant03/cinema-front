import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './COMPONENTS/movies/movies.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiClient } from './API/apiClient.service';
import { MovieService } from './SERVICES/cinema.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './COMPONENTS/navigation/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MovieComponent } from './COMPONENTS/movies/movie/movie.component';
import { ShowRoomComponent } from './COMPONENTS/show-room/show-room.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReservationComponent } from './COMPONENTS/show-room/reservation/reservation.component';
import {MatButtonModule} from '@angular/material/button';
import { MessagesComponent } from './COMPONENTS/messages/messages.component';
import { ReportComponent } from './COMPONENTS/show-room/reservation/report/report.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ClientComponent } from './COMPONENTS/client/client.component';
import { ReservationsComponent } from './COMPONENTS/client/reservations/reservations.component';
import {MatChipsModule} from '@angular/material/chips';
import { CinemaComponent } from './COMPONENTS/cinema/cinema.component';
import { FormCategoryComponent } from './COMPONENTS/cinema/form-category/form-category.component';
import { FormMovieComponent } from './COMPONENTS/cinema/form-movie/form-movie.component';
import { FormShowTimeComponent } from './COMPONENTS/cinema/form-show-time/form-show-time.component';
import { FormShowRoomComponent } from './COMPONENTS/cinema/form-show-room/form-show-room.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    MovieComponent,
    ShowRoomComponent,
    ReservationComponent,
    MessagesComponent,
    ReportComponent,
    ClientComponent,
    ReservationsComponent,
    CinemaComponent,
    FormCategoryComponent,
    FormMovieComponent,
    FormShowTimeComponent,
    FormShowRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatChipsModule,
    MatMenuModule,
    MatSelectModule
    
  ],
  providers: [ApiClient, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
