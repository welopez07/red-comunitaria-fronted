import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../app/models/usuario.model'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/usuarios'; 

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}`);
  }

  // Crear un nuevo usuario
  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}`, usuario);
  }

  // Editar un usuario existente
  editarUsuario(usuarioId: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}/${usuarioId}`, usuario);
  }
  //obtener usuario por id
  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  // Obtener usuario por documento de identificación
  obtenerUsuarioPorDocumento(documentNumber: string): Observable<Usuario> {
  return this.http.get<Usuario>(`${this.baseUrl}/documentNumber/${documentNumber}`);
  }
  
  // Eliminar un usuario
  eliminarUsuario(usuarioId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${usuarioId}`);
  }
}