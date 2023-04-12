import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';

import { FilmI } from '../../modelos/film.interface';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-boletero',
  templateUrl: './boletero.component.html',
  styleUrls: ['./boletero.component.css']
})

export class BoleteroComponent implements OnInit {

  styleAccordion = 'margin-top: 10px;margin-right: 30px;margin-left: 30px;';

  //fimls:FilmI[];
  nombre:string="";
  apellido:string="";
  funcion:string ="";
  precio:string="Precio fijo"; //obtenido de la bd
  butacas:string[] = new Array ("1","2","3");
  butacasElegidas:string[] = new Array ("9");
  precioTotal:string="calcular precio";

  
  constructor(private api:ApiService) {  }

  ngOnInit(): void {
    this.api.getAllFilm(1).subscribe(data =>
      console.log())
  }


  guardarDatos(form:NgForm){
    console.log(form.value);

  }

  agregarButaca(butaca:string){
    this.butacasElegidas.push(butaca);
    console.log(this.butacasElegidas)
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}


