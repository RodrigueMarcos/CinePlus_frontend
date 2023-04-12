import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { BoleteroComponent } from './vistas/boletero/boletero.component';
import { AdminComponent } from './vistas/admin/admin.component';

const routes: Routes = [
    { path:'', redirectTo:'login', pathMatch:'full'},
    { path:'login', component:LoginComponent },
    { path:'boletero', component:BoleteroComponent},
    { path:'admin', component:AdminComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutinModule { }
export const routingComponent = [LoginComponent,BoleteroComponent,AdminComponent];