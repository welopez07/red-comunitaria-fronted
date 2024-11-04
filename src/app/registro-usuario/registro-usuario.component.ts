import { Component } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service'; 
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {

  usuario: Usuario = {} as Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  registrarUsuario() {
    this.usuarioService.crearUsuario(this.usuario).subscribe({
      next: () => {
        alert('Usuario registrado exitosamente');
        this.router.navigate(['/usuarios']); // Redirige a la lista de usuarios después de mostrar la alerta
      },
      error: (err) => {
        console.error('Error al registrar el usuario:', err);
        alert('No se pudo registrar el usuario. Verifica la conexión con el backend.');
      }
    });
  }

}
