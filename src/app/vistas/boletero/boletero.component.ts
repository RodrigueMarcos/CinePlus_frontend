import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';

import { FilmI } from '../../modelos/film.interface';
import { FormsModule, NgForm, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-boletero',
  templateUrl: './boletero.component.html',
  styleUrls: ['./boletero.component.css']
})

export class BoleteroComponent implements OnInit {
  
  idFill:number=1;


  
  precio:string="Precio fijo"; //obtenido de la bd
  precioTotal:string="calcular precio";

  
  constructor(private api:ApiService) {
    
    }

  
  ngOnInit(): void {
    this.api.getEnableMovScreening().subscribe(data =>
     console.log(data))
     console.log("prueba34");
  }


  gaveData(form:NgForm){
    if(form.valid == true){
      console.log(form.value);
      //mandar a la api
    }else{
      alert("Error interno al cargar los datos");
    }
  }





 
}


