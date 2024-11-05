import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SolicitudInversionComponent } from './solicitud-inversion/solicitud-inversion.component';
import { RegistroProyectoComponent } from './registro-proyecto/registro-proyecto.component';
import { HomeComponent } from './home/home.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: "usuarios", component: UsuariosComponent}, 
    {path: 'registro-usuario', component: RegistroUsuarioComponent},
    {path: 'editar-usuario/:id', component: EditarUsuarioComponent},
    {path: 'proyectos', component:ProyectosComponent},   
    {path: 'registro-proyecto', component: RegistroProyectoComponent },    
    {path: 'solicitud-inversion/:id', component: SolicitudInversionComponent},

];
