import { Component, OnInit } from '@angular/core';
import { GeneresI } from 'src/app/modelos/generes.interface';
import { ApiService } from '../../servicios/api/api.service';
import { DirectorI } from 'src/app/modelos/Director.interface';
import { MovieI } from 'src/app/modelos/Movie.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})

export class AdminComponent implements OnInit{

  generes:GeneresI[] = [{ID:2,title:"hola"}];

  movie = {} as MovieI;
  titleMov:string="";
  duracionInput:number=0;
  lastname:string="";
  name:string="";
  synopsisInput:string="";
  fullMovie:MovieI[] = [];
  

  generesElegidos:GeneresI[] = new Array ();
  //el 7 es del id del admin

  constructor(private api:ApiService){

  }

  ngOnInit(): void {
    //this.api.getGeneres().subscribe(data =>
    //  this.generes.concat(data))
      //console.log("prueba123");

    this.api.getAllMovie().subscribe(data => this.fullMovie.concat(data));
    console.log(this.fullMovie);
      
  }

  addGeneroElegido(id:GeneresI){
    if(this.generesElegidos.includes(id)){
      alert("Ya elegio la género: "+id.title);
    }else{
      this.generesElegidos.push(id);
    }
    
  }

  clearGeneroElegido(){
    this.generesElegidos.length=0;
    alert("Se elimino las generos elegidos");
  }
  
  addMovie(){
    //validar primero
    this.movie = {
      title:this.titleMov,
      duration:this.duracionInput,
      lastnameDirector:this.lastname,
      nameDirector:this.name,
      synopsis:this.synopsisInput,
      createdByID:7
    }
    console.log(this.movie);
    this.api.addMOvie(this.movie).subscribe(data => {
      console.log(data);
      alert(data.Result);
    });


  }


}

