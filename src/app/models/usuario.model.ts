export interface Usuario {
    id?: number; 
    name: string;
    lastName: string;
    documentNumber: string;
    cellPhone: string;
    email: string;
    address?: string; 
    birthdayDate?: Date; 
    role: string;
  }