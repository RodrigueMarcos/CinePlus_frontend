import { Component, OnInit } from '@angular/core';
import { GeneresI } from 'src/app/modelos/generes.interface';
import { ApiService } from '../../servicios/api/api.service';
import { DirectorI } from 'src/app/modelos/Director.interface';
import { MovieI } from 'src/app/modelos/Movie.interface';
import { PersonI } from 'src/app/modelos/Person.interface';
import { PersonResponseI } from 'src/app/modelos/PersonResponse.interface';
import { NgForm } from '@angular/forms';
import { UserI } from 'src/app/modelos/User.interface';
import { UserResponseI } from 'src/app/modelos/UserResponseI.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})

export class AdminComponent implements OnInit{

  generes:GeneresI[] = [{ID:2,title:"Acción"}];

  movie = {} as MovieI;
  titleMov:string="";
  duracionInput:number=0;
  lastname:string="";
  name:string="";
  synopsisInput:string="";
  fullMovie:MovieI[] = [];
 
 
  
  allVendedores:UserResponseI[] = new Array();
  

  generesElegidos:GeneresI[] = new Array ();
  //el 7 es del id del admin

  constructor(private api:ApiService){

  }

  ngOnInit(): void {
    //this.api.getGeneres().subscribe(data =>
    //  this.generes.concat(data))
      //console.log("prueba123");

    this.api.getAllMovie().subscribe(data => this.fullMovie.concat(data));
   
    this.api.getAllVendedores().subscribe(data =>
      this.allVendedores = data);
      console.log(this.allVendedores);
  }

 
  
 

  addUser(form:NgForm){
    console.log(form.value);
    var vendedor = {} as UserI;
    vendedor = {
      Name:form.value.nombreVendedor,
      LastName:form.value.apellidoVendedor,
      UserName:form.value.user,
      Passwork:form.value.passwork
    }
    this.api.addVendedor(vendedor).subscribe(data =>
      alert(data.message));
  }

  editUser(id:any){
    console.log(id);

  }


  
}

