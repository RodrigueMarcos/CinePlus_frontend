import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeneresI } from 'src/app/modelos/generes.interface';
import { MovieI } from 'src/app/modelos/Movie.interface';
import { UserResponseI } from 'src/app/modelos/UserResponseI.interface';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  generes:GeneresI[] = [{ID:2,title:"Acción"},{ID:3,title:"Comidia"}];

  movie = {} as MovieI;
  titleMov:string="";
  duracionInput:number=0;
  lastname:string="";
  name:string="";
  synopsisInput:string="";
  fullMovie:MovieI[] = [];
  allVendedores:UserResponseI[] = new Array();
  

  generesElegidos:GeneresI[] = new Array ();
  showGenere:string="";


  //el 7 es del id del admin
  addMovie(form:NgForm){
    if(this.showGenere!=""){
      //Seguir
      console.log("seguir");
    }else{
      alert("El Género es un campo obligatorio");
    }
    //validar primero
    /*this.movie = {
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
     
    }); */
  }
  addGeneroElegido(obj:GeneresI){
    if(this.generesElegidos.includes(obj)){
      alert("Ya elegio el género: "+obj.title);
    }else{
      this.generesElegidos.push(obj);
      this.showGenere= this.showGenere + obj.title +", ";
      console.log(this.showGenere);
    }
    
    
  }

  clearGeneroElegido(){
    this.generesElegidos.length=0;
    this.showGenere="";
    alert("Se elimino los generos elegidos");
  }

}

