import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutinModule, routingComponent } from './app-routing.module';

import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { ButacasGridComponent } from './butacas-grid/butacas-grid.component';
import { ListMovieScreeningComponent } from './list-movie-screening/list-movie-screening.component';



import {MatTableModule} from '@angular/material/table';
import { ListTicketSoldComponent } from './list-ticket-sold/list-ticket-sold.component';
import { AddMovieComponent } from './vistas/admin/add-movie/add-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { AddMovieScreeningComponent } from './vistas/admin/add-movie-screening/add-movie-screening.component';
import { AddUserComponent } from './vistas/admin/add-user/add-user.component';
import { ListUserComponent } from './vistas/admin/list-user/list-user.component';

@NgModule({
  declarations: [
    routingComponent,
    AppComponent, 
    FooterComponent, 
    ToolbarComponent, ButacasGridComponent, 
    ListMovieScreeningComponent, ListTicketSoldComponent, 
    AddMovieComponent, ListMovieComponent, 
    AddMovieScreeningComponent, AddUserComponent, 
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutinModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
