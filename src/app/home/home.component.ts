import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto.model';
import { Noticia } from '../models/noticia.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  proyectosDestacados: Proyecto[] = [
    {
      projectId: 1,
      name: 'Proyecto de Innovación',
      category: 'Tecnología',
      date: new Date(),
      minInversion: 50000,
      detailsInversion: 'Inversión inicial para desarrollo tecnológico.',
      estado: 'ACTIVO'
    },
    {
      projectId: 2,
      name: 'Emprendimiento Verde',
      category: 'Sostenibilidad',
      date: new Date(),
      minInversion: 30000,
      detailsInversion: 'Fomentar prácticas sostenibles.',
      estado: 'ACTIVO'
    }
  ];

  noticiasEmprendimiento: Noticia[]  = [
    {
      id: 1,
      titulo: 'Nuevas oportunidades para emprendedores',
      descripcion: 'El gobierno anuncia incentivos para startups en tecnología.',
      fecha: '2024-10-30'
    },
    {
      id: 2,
      titulo: 'Foro Internacional de Innovación',
      descripcion: 'Evento anual que reúne a los líderes del sector.',
      fecha: '2024-11-05'
    }
  ];

  constructor(private router: Router) {}

  irASolicitudInversion(proyecto: Proyecto) {
    this.router.navigate(['/solicitud-inversion', { id: proyecto.projectId }]);
  }

  irAProyectos() {
    this.router.navigate(['/proyectos']);
  }

  irARegistroProyecto() {
    this.router.navigate(['/registro-proyecto']);
  }




}
