import { Component } from '@angular/core';


export interface Movie{
  title:string;
  duration:number;
  director:string;
  sinopsis:string;
  genere:string;
  createdAt:string;
}

const ELEMENT_DATA: Movie[] = [
  {title:'awsds',duration:120,director:'asd',sinopsis:'Linda peli',genere:'Action',createdAt:'24/05/2023'},
  
];

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent {
  displayedColumns: string[] = ['title', 'duration', 'sinopsis', 'genere', 'createdAt'];
  dataSource = ELEMENT_DATA;
}
