import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitudInversion } from '../app/models/solicitud-inversion.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudInversionService {
  private apiUrl = 'http://localhost:8080/solicitudes-inversion';

  constructor(private http: HttpClient) { }

  crearSolicitud(solicitud: SolicitudInversion): Observable<SolicitudInversion> {
    return this.http.post<SolicitudInversion>(this.apiUrl, solicitud);
  }
}
