import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../models/usuario.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario = {} as Usuario;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    if (usuarioId) {
      this.usuarioService.obtenerUsuarioPorId(usuarioId).subscribe(usuario => {
        this.usuario = usuario;
      });
    }
  }

  actualizarUsuario() {
    this.usuarioService.editarUsuario(this.usuario.userId!, this.usuario).subscribe({
      next: () => {
        alert('Usuario actualizado exitosamente');
        this.router.navigate(['/usuarios']); // Redirige a la lista de usuarios
      },
      error: (err) => {
        console.error('Error al actualizar el usuario:', err);
        alert('No se pudo actualizar el usuario. Verifica la conexión con el backend.');
      }
    });
  }
}





