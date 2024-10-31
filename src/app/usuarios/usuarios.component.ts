import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Usuario } from '../models/usuario.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  
  usuarios: Usuario[] = [
    {
      name: 'Carlos',
      lastName: 'López',
      documentNumber: '123456789',
      cellPhone: '555-1234',
      email: 'carlos@example.com',
      role: 'Emprendedor',      
    },
    
  ];
}
  

