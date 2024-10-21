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




@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    MovieComponent,
    ShowRoomComponent,
    ReservationComponent,
    MessagesComponent
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
    MatButtonModule
    
  ],
  providers: [ApiClient, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
