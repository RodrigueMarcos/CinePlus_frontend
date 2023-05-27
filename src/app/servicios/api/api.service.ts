import { Injectable } from '@angular/core';

import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { FilmI } from '../../modelos/film.interface';
import { ListaFuncionesI } from '../../modelos/listaFunciones.interface';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { GeneresI } from 'src/app/modelos/generes.interface';
import { MovieI } from 'src/app/modelos/Movie.interface';
import { PersonI } from 'src/app/modelos/Person.interface';
import { PersonResponseI } from 'src/app/modelos/PersonResponse.interface';
import { UserI } from 'src/app/modelos/User.interface';
import { UserResponseI } from 'src/app/modelos/UserResponseI.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://localhost:7054/api/v1/";
  constructor(private http:HttpClient) { }

  loginByEmail(form: LoginI):Observable<ResponseI>{
    let direccion = this.url + "User";
    return this.http.post<ResponseI>(direccion,form)
  }

  getAllFilm(page:number):Observable<FilmI[]>{
    let direccion = this.url + "paciente?page=" + page;

    return this.http.get<FilmI[]>(direccion);
  }

  getEnableMovScreening():Observable<ListaFuncionesI[]>{
    let direccion = this.url + "MovScreening"; 
    return this.http.get<ListaFuncionesI[]>(direccion);
  }

  getGeneres():Observable<GeneresI[]>{
    let direccion = this.url + "genere";
    return this.http.get<GeneresI[]>(direccion);
  }

  addMOvie(p_movie: MovieI):Observable<ResponseI>{
    let direccion = this.url + "movie";
    //console.log(direccion);
    return this.http.post<ResponseI>(direccion,p_movie);
  }

  getAllMovie():Observable<MovieI[]>{
    let direccion = this.url + "movie"; 
    return this.http.get<MovieI[]>(direccion);

  }

  addVendedor(p_person:UserI):Observable<ResponseI>{
    let direccion = this.url + "user";
    console.log(direccion);
    return this.http.post<ResponseI>(direccion,p_person);
  }

  getAllVendedores():Observable<UserResponseI[]>{
    let direccion = this.url + "user"; 
    return this.http.get<UserResponseI[]>(direccion);

  }

}
