import { Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
//import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class ToolbarComponent {
  
  
  nombreYapellido:string = "@NombreDelUsuario";
  nombreUsuario:string = "@usuario";
  precioUnitario:number = 150;
  precioTotal:number = 300; 

  constructor(private router:Router){}

  onClick(){
    this.router.navigate(['login']);
  }


}

export  class  MenuOverviewExample  {}

