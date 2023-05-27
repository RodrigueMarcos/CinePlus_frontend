import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

interface butacas{
  column:string;
  row:string;
  state:boolean;
}

@Component({
  selector: 'app-butacas-grid',
  templateUrl: './butacas-grid.component.html',
  styleUrls: ['./butacas-grid.component.css']
})
export class ButacasGridComponent implements OnChanges, OnInit {
  @Input() idFuncion!: number;

  grid:butacas[] = [];

  columns:number = 3;
  rows:number = 3;
  
  ngOnChanges(changes: SimpleChanges): void {
   console.log('Changes ->',changes);
  }
  ngOnInit(): void {
    //método para obtener las butacas libres en la API
    this.grid = [
      {column:"1",row:"A",state:true},
      {column:"2",row:"A",state:true},
      {column:"1",row:"B",state:false},
      {column:"2",row:"B",state:false}];
  }
  



}
