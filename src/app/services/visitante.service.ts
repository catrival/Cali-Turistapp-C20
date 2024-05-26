import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  private dataVisitante = [
    { id: 1, nombre: 'Visit #1', activo: true }, 
    { id: 2, nombre: 'Visit #2', activo: true }, 
    { id: 3, nombre: 'Visit #3', activo: false}, 
  ];

  constructor() { }

  getVisitantes() {
    return this.dataVisitante;
  }
}
