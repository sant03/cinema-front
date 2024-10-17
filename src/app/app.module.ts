import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './COMPONENTS/movies/movies.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiClient } from './API/apiClient.service';
import { MovieService } from './SERVICES/movie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './COMPONENTS/navigation/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { MovieComponent } from './COMPONENTS/movies/movie/movie.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [ApiClient, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
