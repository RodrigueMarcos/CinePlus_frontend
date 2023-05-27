import { Component } from '@angular/core';

export interface User{
  name:string;
  lastName:string;
  user:string;
  passwork:string;

}

const ELEMENT_DATA: User[] = [
  {name:'Pedro',lastName:'Zacarias',user:'peroPicapieda',passwork:'1234'},
  
];

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  displayedColumns: string[] = ['name', 'lastName', 'user', 'passwork'];
  dataSource = ELEMENT_DATA;
}
