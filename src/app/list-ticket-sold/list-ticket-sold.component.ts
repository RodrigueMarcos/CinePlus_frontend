import { Component } from '@angular/core';

export interface Ticket {
  movieScreening: string;
  customer: string;
  row: string,
  column: string;
  date: string;
  seller:string;
}

const ELEMENT_DATA: Ticket[] = [
  {movieScreening: 'Rapido y furioso 10', customer:'Pepe', row:'A',column:'1',date:'12/01/23 17:00',seller:'pepe'},
  {movieScreening: 'Narnia',customer:'Pepe', row:'A',column:'2',date:'12/01/23 17:00',seller:'pepe'},
  {movieScreening: 'Shrek',customer:'Pepe', row:'A',column:'3',date:'12/01/23 17:00',seller:'pepe'},
  {movieScreening: 'Messi',customer:'Pepe', row:'A',column:'4',date:'12/01/23 17:00',seller:'pepe'},
];

@Component({
  selector: 'app-list-ticket-sold',
  templateUrl: './list-ticket-sold.component.html',
  styleUrls: ['./list-ticket-sold.component.css']
})
export class ListTicketSoldComponent {
  displayedColumns: string[] = ['movieScreening', 'customer', 'row', 'column', 'date', 'seller'];
  dataSource = ELEMENT_DATA;
  
}
