import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { Proyecto } from '../models/proyecto.model';
import { ProyectoService } from '../../servicios/proyecto.service';




@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = []; // Array para almacenar los proyectos

  constructor(private router: Router, private proyectoService: ProyectoService) {} // Inyección del Router y el Servicio

  ngOnInit(): void {
    this.cargarProyectos(); // Llama al método para cargar proyectos al inicializar

    if (this.proyectos.length === 0) {
      this.proyectos = [
        { projectId: 1, name: 'Proyecto A', category: 'Categoría 1', date: new Date(), minInversion: 5000, detailsInversion: 'Detalles A', estado: 'Activo' },
        { projectId: 2, name: 'Proyecto B', category: 'Categoría 2', date: new Date(), minInversion: 10000, detailsInversion: 'Detalles B', estado: 'Inactivo' }
      ];
    }
  }

  cargarProyectos() {
    this.proyectoService.getProyectos().subscribe({
      next: (proyectos) => {
        this.proyectos = proyectos; // Asigna los proyectos obtenidos del servicio
      },
      error: (err) => {
        console.error("Error al cargar proyectos:", err);
        alert("No se pueden cargar los proyectos. Verifica la conexión con el backend.");
      }
    });
  }

  invertirProyecto(proyectoId: number) {
    this.router.navigate(['solicitud-inversion', proyectoId]);
  }
  

}
