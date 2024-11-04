import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Usuario } from '../models/usuario.model';
import { RouterModule, Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';



@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  
  usuarios: Usuario[] = [];
  
  constructor(private router: Router, private usuarioService: UsuarioService ){}
  
  ngOnInit(): void {
    this.obtenerUsuarios();

    if (this.usuarios.length === 0){
      this.usuarios = [
        {
          userId: 1,
          name: 'Carlos',
          lastName: 'López',
          documentNumber: '123456789',
          cellPhone: '555-1234',
          email: 'carlos@example.com',
          rol: 'Emprendedor'
        },
        {
          userId: 2,
          name: 'María',
          lastName: 'González',
          documentNumber: '987654321',
          cellPhone: '555-5678',
          email: 'maria@example.com',                  
          rol: 'Inversionista'
        }    
      ];
    }
  }

  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (usuarios) =>{
        this.usuarios = usuarios;
      },
      error: (err) => {
        console.error("Error al cargar usuarios:", err);
        alert("No se pueden cargar los usuarios. Verifica la conexión con el backend.");
      }      
    });
  } 
  
  registrarUsuario() {
    this.router.navigate(['/registro-usuario']);
  }
  
  editarUsuario(usuarioId: number) {
    this.router.navigate(['/editar-usuario', usuarioId]);        
  } 

  eliminarUsuario(usuarioId: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuarioService.eliminarUsuario(usuarioId).subscribe({
        next: () => {
          alert('Usuario eliminado exitosamente');
          this.obtenerUsuarios();
        },
        error: (err) => {
          console.error('Error al eliminar el usuario:', err);
          if (err){
            alert('No se pudo eliminar el usuario. Verifica la conexión con el backend.');
          }
          
        }
      });
    }
  }
  
}
  

