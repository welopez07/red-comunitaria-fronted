export interface Proyecto {
    projectId: number;  // Mantener projectId para ser consistente con el backend
    name: string;
  }
  
  export interface Inversionista {
    name: string;
    lastName: string;
  }
  
  export interface SolicitudInversion {
    proyecto: Proyecto; // Incluye el proyecto relacionado
    inversionista: Inversionista;
    amount: number;     // Monto de inversión
    message: string;    // Mensaje del inversionista
    date: Date;         // Fecha de la solicitud
  }