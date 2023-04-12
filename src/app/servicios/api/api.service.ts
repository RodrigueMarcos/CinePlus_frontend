import { Injectable } from '@angular/core';

import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { FilmI } from '../../modelos/film.interface';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://localhost:7010/api/";
  constructor(private http:HttpClient) { }

  loginByEmail(form: LoginI):Observable<ResponseI>{
    let direccion = this.url + "User";
    return this.http.post<ResponseI>(direccion,form)
  }

  getAllFilm(page:number):Observable<FilmI[]>{
    let direccion = this.url + "paciente?page=" + page;

    return this.http.get<FilmI[]>(direccion);
  }
}
