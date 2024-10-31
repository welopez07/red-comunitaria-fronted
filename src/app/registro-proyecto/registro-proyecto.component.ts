import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Proyecto {
  name: string;
  category: string;
  minInversion: number;
  detailsInversion: string;
}

@Component({
  selector: 'app-registro-proyecto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-proyecto.component.html',
  styleUrl: './registro-proyecto.component.css'
})
export class RegistroProyectoComponent {

  proyecto: Proyecto = {
    name: '',
    category: '',
    minInversion: 0,
    detailsInversion: ''
  };

  registrarProyecto() {
    // Aquí se puede agregar la lógica para registrar el proyecto
    console.log('Proyecto registrado:', this.proyecto);
  }

}
