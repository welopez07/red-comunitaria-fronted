import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SolicitudInversionComponent } from './solicitud-inversion/solicitud-inversion.component';
import { RegistroProyectoComponent } from './registro-proyecto/registro-proyecto.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: "usuarios", component: UsuariosComponent}, 
    {path: 'proyectos', component:ProyectosComponent},   
    {path: 'registro-proyecto', component: RegistroProyectoComponent },    
    {path: 'solicitud-inversion/id', component: SolicitudInversionComponent},

];
