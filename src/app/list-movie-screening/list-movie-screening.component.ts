import { Component } from '@angular/core';

export interface MovieScreening {
  movie: string;
  movieTheater: number;
  date: string,
  from: string;
  to: string;
}

const ELEMENT_DATA: MovieScreening[] = [
  {movie: 'Rapido y furioso 10', movieTheater: 1, date: '12/01/23', from: '17:00', to:'18:00'},
  {movie: 'Narnia', movieTheater: 1, date: '13/01/23', from: '17:00', to:'18:00'},
  {movie: 'Shrek', movieTheater: 2, date: '13/01/23', from: '17:00', to:'18:00'},
  {movie: 'Messi', movieTheater: 2, date: '14/01/23', from: '17:00', to:'18:00'},
];

@Component({
  selector: 'app-enable-movie-screening',
  templateUrl: './list-movie-screening.component.html',
  styleUrls: ['./list-movie-screening.component.css']
})
export class ListMovieScreeningComponent {
  displayedColumns: string[] = ['movie', 'movieTheater', 'date', 'from', 'to'];
  dataSource = ELEMENT_DATA;
  
}

