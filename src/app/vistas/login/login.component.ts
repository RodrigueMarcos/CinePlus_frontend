import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { ApiService} from '../../servicios/api/api.service'
import { LoginI } from '../../modelos/login.interface';

import { Router } from '@angular/router';
import { ResponseI } from '../../modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  loginForm = new FormGroup ({
    usuario : new FormControl('',Validators.required),
    passwork : new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, private router:Router) {}
  
  errorStatus:any = false;
  errorMjs = "Prueba de mensaje";

  ngOnInit(): void{
    //this.checkLocalStorage();
  }
  /* el objetivo es ver si es un admin o un boletero
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['boletero']);
    }
  }
*/
  onLogin(form: LoginI){
    this.router.navigate(['boletero']);

/*    this.api.loginByEmail(form).subscribe(data =>{
      let dataResponse:ResponseI = data;
      if(dataResponse.status == "Ok"){
        localStorage.setItem("token", dataResponse.result.token);
        this.router.navigate(['boletero'])
      }else{
        this.errorStatus = true;
        this.errorMjs = dataResponse.result.error_msg;
      }
    });*/





  }
}


