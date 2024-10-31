import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SolicitudInversion, Inversionista } from '../models/solicitud-inversion.model';
import { FormsModule } from '@angular/forms';
import { Proyecto } from '../models/proyecto.model';
import { ProyectoService } from '../../servicios/proyecto.service';


@Component({
  selector: 'app-solicitud-inversion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './solicitud-inversion.component.html',
  styleUrl: './solicitud-inversion.component.css'
})
export class SolicitudInversionComponent implements OnInit{
  proyectoId!: number;
  proyectos: Proyecto[] = [];
  selectedProyecto: Proyecto | null = null;
  solicitudInversion: SolicitudInversion = {
    proyecto: { projectId: 0, name: '' },
    inversionista: { name: '', lastName: '' },
    amount: 0,
    message: '',
    date: new Date()
  };

  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.proyectoId = +params['id'];
      this.cargarProyecto();
    });
    this.cargarProyectos(); // Carga para el select
  }

  cargarProyecto() {
    this.proyectoService.getProyectoPorId(this.proyectoId).subscribe({
      next: (proyecto: Proyecto) => {
        this.selectedProyecto = proyecto;
        this.solicitudInversion.proyecto = proyecto;
      },
      error: (err) => {
        console.error("Error al cargar el proyecto:", err);
        alert("No se puede cargar el proyecto. Verifica la conexión con el backend.");
      }
    });
  }

  cargarProyectos() {
    this.proyectoService.getProyectos().subscribe({
      next: (proyectos: Proyecto[]) => {
        this.proyectos = proyectos;
      },
      error: (err) => {
        console.error("Error al cargar proyectos:", err);
        alert("No se pueden cargar los proyectos. Verifica la conexión con el backend.");
      }
    });
  }

  enviarSolicitud() {
    // Aquí envías la solicitud de inversión
  }
}
