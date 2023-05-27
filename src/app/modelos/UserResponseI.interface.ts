import { PersonResponseI } from "./PersonResponse.interface";

export interface UserResponseI{
    id:number;
    nameUser:string;
    passwork:string;
    habilitado:string;
    personId:number;
    person:PersonResponseI;
}