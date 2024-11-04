export interface Proyecto {
  projectId: number;
  name: string;
  date: Date;
  category: string;  
  minInversion: number;
  detailsInversion: string;
  estado: string;
  //solicitudInversions: SolicitudInversion[];
}