import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestorService {

  // Datos ficticios para rutas
  private dataGestores = [
    { id: 1, nombre: 'Admin'}, 
    { id: 2, nombre: 'Arquitec'}, 
    { id: 3, nombre: 'Special member'}, 
    // ...más rutas
  ];

  constructor() { }

  getGestores() {
    return this.dataGestores;
  }
}
