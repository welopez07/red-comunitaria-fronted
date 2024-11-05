import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SolicitudInversion, Inversionista } from '../models/solicitud-inversion.model';
import { FormsModule } from '@angular/forms';
import { Proyecto } from '../models/proyecto.model';
import { ProyectoService } from '../../servicios/proyecto.service';
import { SolicitudInversionService } from '../../servicios/solicitud-inversion.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../models/usuario.model';


@Component({
  selector: 'app-solicitud-inversion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './solicitud-inversion.component.html',
  styleUrl: './solicitud-inversion.component.css'
})
export class SolicitudInversionComponent implements OnInit{
  proyecto!: Proyecto;
  id!: number;
  message: string = '';
  documento: string = '';
  documentNumber: string = '';
  amount: number = 0;
  isInversionistaValido: boolean = false;
  documentValidated: boolean = false;
  inversionistaValidado: Inversionista | null = null;
  public mostrarMensaje: boolean = false; // Controla la visibilidad del mensaje
  public mensajeAlerta: string = ''; // Contiene el mensaje a mostra


  
  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectoService,
    private solicitudService: SolicitudInversionService,
    private usuarioService: UsuarioService

  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.cargarProyecto(this.id);
  }

  cargarProyecto(id: number): void {
    this.proyectoService.getProyectoPorId(id).subscribe(
      (data: Proyecto) => {
        this.proyecto = data;
      },
      error => {
        console.error('Error al cargar el proyecto:', error);
      }
    );
  }

  validarInversionista(): void {
    this.usuarioService.obtenerUsuarioPorDocumento(this.documento).subscribe(
      (data: Usuario) => {
        this.documentValidated = true;
        if (data && data.rol === 'INVERSIONISTA') {
          this.isInversionistaValido = true;
          this.mensajeAlerta = 'Usuario validado correctamente como Inversionista.';
          this.mostrarMensajeConTemporizador();
        } else {
          this.isInversionistaValido = false;
          this.mensajeAlerta = 'El usuario no está registrado como inversionista. Por favor, regístrese.';
          this.mostrarMensajeConTemporizador();
        }
      },
      error => {
        this.documentValidated = true;
        this.isInversionistaValido = false;
        console.error('Error al validar el inversionista:', error);
        this.mensajeAlerta = 'Hubo un error al validar el documento. Inténtalo de nuevo.';
        this.mostrarMensajeConTemporizador();
      }
    );
  }

  mostrarMensajeConTemporizador(): void {
    this.mostrarMensaje = true; // Muestra el mensaje
    setTimeout(() => {
      this.mostrarMensaje = false; // Oculta el mensaje después de 3 segundos
    }, 3000);
  }
    

  enviarSolicitud(): void {
    if (!this.documentValidated) {
      alert('Por favor valida el documento antes de enviar la solicitud.');
      return;
    }
    
    if (this.isInversionistaValido) {
      const nuevaSolicitud: SolicitudInversion = {
        proyecto: this.proyecto,
        inversionista: {
          documentNumber: this.documento,
        }, 
        message: this.message,
        date: new Date(),
        amount: this.amount
      };

      console.log('Enviando solicitud:', nuevaSolicitud);
  
      this.solicitudService.crearSolicitud(nuevaSolicitud).subscribe(
        () => {
          console.log('Solicitud registrada exitosamente.');
          alert('Solicitud registrada exitosamente.');
          this.resetForm();
        },
        error => {
          console.error('Error al registrar la solicitud:', error);
          alert('Hubo un error al registrar la solicitud');
        }
      );
    } else {
      alert('El usuario no está validado como inversionista.');
    }
  }

  resetForm(): void {
    this.message = '';
    this.amount = 0;
    this.documento = '';
    this.isInversionistaValido = false;
    this.documentValidated = false;
  }
  
  
}
