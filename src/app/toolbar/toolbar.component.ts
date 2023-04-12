import { Component,} from '@angular/core';
import { Router } from '@angular/router';
//import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent {
  
  
  nombreYapellido:string = "Juan lopez";
  nombreUsuario:string = "pepe@gamil.com";
  precioUnitario:number = 150;
  precioTotal:number = 300; 

  constructor(private router:Router){}

  onClick(){
    this.router.navigate(['login']);
  }


}

export  class  MenuOverviewExample  {}

