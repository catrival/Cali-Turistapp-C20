// ruta-actividad-module/ruta.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  // Datos ficticios para rutas
  private rutasFicticias = [
    { id: 1, nombre: 'Ruta Histórica', descripcion: 'Museo siloe.' },
    { id: 2, nombre: 'Gradas', descripcion: 'Descubre la historia de la comuna 20.' },
    { id: 3, nombre: 'Mio Cable', descripcion: 'comuna 20.' },
    // ...más rutas
  ];

  constructor() { }

  getRutas() {
    return this.rutasFicticias;
  }
}
