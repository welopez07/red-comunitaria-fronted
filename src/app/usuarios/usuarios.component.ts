import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Usuario } from '../models/usuario.model';
import { RouterModule, Router } from '@angular/router';



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
      id: 1,
      name: 'Carlos',
      lastName: 'López',
      documentNumber: '123456789',
      cellPhone: '555-1234',
      email: 'carlos@example.com',
      address: 'Calle Falsa 123',
      birthdayDate: new Date(1990, 5, 15),
      role: 'Emprendedor'
    },
    {
      id: 2,
      name: 'María',
      lastName: 'González',
      documentNumber: '987654321',
      cellPhone: '555-5678',
      email: 'maria@example.com',
      address: 'Avenida Siempre Viva 456',
      birthdayDate: new Date(1985, 10, 20),
      role: 'Inversionista'
    }    
  ];

  constructor(private router: Router){}

    registrarUsuario() {
      this.router.navigate(['/registro-usuario']);
    }
  
    editarUsuario(usuarioId: number) {
      this.router.navigate(['/editar-usuario', usuarioId]);
    }
  
    eliminarUsuario(usuarioId: number) {
      // Aquí podrías añadir la lógica para eliminar al usuario
      console.log(`Eliminar usuario con ID: ${usuarioId}`);
    }
}
  

