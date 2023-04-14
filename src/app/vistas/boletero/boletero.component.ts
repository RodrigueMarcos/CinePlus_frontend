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
  
  //fimls:FilmI[];
  alerNombre:boolean=false;
  alerApellido:boolean=false;
  alerFuncion:boolean=false;
  alerButaca:boolean=false;
  showDetalle:boolean=false;
  showButacasElegidas:boolean=false;

  nombre:string="";
  apellido:string="";
  funcion:string ="";
  precio:string="Precio fijo"; //obtenido de la bd
  butacas:string[] = new Array ("1","2","3");
  butacasElegidas:string[] = new Array ();
  precioTotal:string="calcular precio";

  
  constructor(private api:ApiService) {
    
    }

  
  ngOnInit(): void {
    this.api.getEnableMovScreening().subscribe(data =>
     console.log(data))
     console.log("prueba34");
  }


  guardarDatos(form:NgForm){
    this.validarCampos();

    if(this.alerApellido==false&&this.alerButaca==false&&this.alerFuncion==false&&this.alerNombre==false){
      this.showDetalle=true; 
    }else{
      this.showDetalle=false; 
    }

    console.log(form.value);
  }

  validarCampos(){

    if(this.nombre==''){
      this.alerNombre = true;
    }else{
      this.alerNombre = false;
    }

    if(this.apellido==''){
      this.alerApellido = true;
    }else{
      this.alerApellido = false;
    }

    if(this.funcion==''){
      this.alerFuncion = true;
    }else{
      this.alerFuncion = false;
    }

    if(this.butacasElegidas.length == 0){
      this.alerButaca = true;
    }else{
      this.alerButaca = false;
    }

  }

  agregarButaca(butaca:string){
    if(this.butacasElegidas.includes(butaca)){
      alert("Ya elegio la butaca numero: "+butaca);
    }else{
      this.butacasElegidas.push(butaca);
    }
    this.showButacasElegidas=true;
    console.log(this.butacasElegidas);
  }

  clearButacasElegidas(){
    this.butacasElegidas.length=0;
    alert("Se elimino las butacas elegidas");
  }

  /*
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }*/
}


