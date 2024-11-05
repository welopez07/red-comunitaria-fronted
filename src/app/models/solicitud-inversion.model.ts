export interface Proyecto {
    projectId: number;  // Mantener projectId para ser consistente con el backend
    name: string;
  }
  
  export interface Inversionista {
    documentNumber: string;
  }
  
  export interface SolicitudInversion {
    id?: number;
    proyecto: Proyecto; // Incluye el proyecto relacionado
    inversionista: Inversionista;
    message: string;
    date: Date;
    amount: number;
  }